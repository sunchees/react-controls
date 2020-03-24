'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-a036f66d.js');
var React = require('react');
var React__default = _interopDefault(React);
var index = require('./index-ca26b417.js');
require('./dash-loader.js');
require('./text.js');
var index$1 = require('./index-f47bf584.js');
var isEqual = require('./isEqual-17e94425.js');
var table = require('./table.js');

var _class;
/**
 * Компонент таблицы, управление которой осуществляется вручную.
 * <br>
 * Данную таблицу следует использовать в случае, когда необходимо реализовать постраничную загрузку данных с сервера.
 * <br>
 * Представляет собой расширение компонента [ReactTable (v6)](https://www.npmjs.com/package/react-table)
 */

var ManualTable = index$1.autobind(_class =
/*#__PURE__*/
function (_React$Component) {
  _rollupPluginBabelHelpers._inherits(ManualTable, _React$Component);

  function ManualTable(props) {
    var _this;

    _rollupPluginBabelHelpers._classCallCheck(this, ManualTable);

    _this = _rollupPluginBabelHelpers._possibleConstructorReturn(this, _rollupPluginBabelHelpers._getPrototypeOf(ManualTable).call(this, props));
    _this.state = {
      data: [],
      page: 0,
      pages: 1,
      filter: _rollupPluginBabelHelpers._objectSpread2({}, props.defaultFilter),
      sort: _rollupPluginBabelHelpers._objectSpread2({}, props.defaultSort),
      loading: true,
      noMoreData: false
    };
    _this.getDataHandle = null;
    return _this;
  }

  _rollupPluginBabelHelpers._createClass(ManualTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      this.getData();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (!isEqual.isEqual(this.props.defaultFilter, prevProps.defaultFilter)) this.setState({
        filter: _rollupPluginBabelHelpers._objectSpread2({}, this.props.defaultFilter)
      });
      if (!isEqual.isEqual(this.props.defaultSort, prevProps.defaultSort)) this.setState({
        sort: _rollupPluginBabelHelpers._objectSpread2({}, this.props.defaultSort)
      });

      if (!isEqual.isEqual(this.state.filter, prevState.filter) || !isEqual.isEqual(this.state.sort, prevState.sort)) {
        clearTimeout(this.getDataHandle);
        this.getDataHandle = setTimeout(function () {
          _this2.setState({
            page: 0,
            pages: 1,
            loading: true
          });

          _this2.getData();
        }, this.props.getDataOnFilterChangeDelay);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "onFiltersUpdate",
    value: function onFiltersUpdate(filters) {
      this.setState({
        filter: _rollupPluginBabelHelpers._objectSpread2({}, filters.reduce(function (acc, filter) {
          return _rollupPluginBabelHelpers._objectSpread2({}, acc, _rollupPluginBabelHelpers._defineProperty({}, filter.id, filter.value));
        }, {}))
      });
      return true;
    }
  }, {
    key: "onSortsUpdate",
    value: function onSortsUpdate(sorts) {
      this.setState({
        sort: _rollupPluginBabelHelpers._objectSpread2({}, sorts.reduce(function (acc, sort) {
          return _rollupPluginBabelHelpers._objectSpread2({}, acc, _rollupPluginBabelHelpers._defineProperty({}, sort.id, sort.desc ? -1 : 1));
        }, {}))
      });
      return true;
    }
  }, {
    key: "onPageChange",
    value: function onPageChange(page) {
      this.setState({
        page: page
      });
      if (page >= this.state.pages - 1 && !this.state.noMoreData) this.getData(page, true);
    }
  }, {
    key: "getData",
    value: function getData() {
      var _this3 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var concatData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!this._isMounted) return;
      clearTimeout(this.getDataHandle);
      this.setState({
        loading: true
      });
      this.props.getData(this.state.filter, this.state.sort, page, this.props.pageSize, function () {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        if (!_this3._isMounted) return;
        var noMoreData = data.length < _this3.props.pageSize;

        _this3.setState({
          data: concatData ? [].concat(_rollupPluginBabelHelpers._toConsumableArray(_this3.state.data), _rollupPluginBabelHelpers._toConsumableArray(data)) : data,
          loading: false,
          pages: concatData ? noMoreData ? _this3.state.pages : _this3.state.pages + 1 : noMoreData ? 1 : 2,
          noMoreData: noMoreData
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          defaultFilter = _this$props.defaultFilter,
          defaultSort = _this$props.defaultSort,
          getData = _this$props.getData,
          getDataOnFilterChangeDelay = _this$props.getDataOnFilterChangeDelay,
          pageSize = _this$props.pageSize,
          props = _rollupPluginBabelHelpers._objectWithoutProperties(_this$props, ["defaultFilter", "defaultSort", "getData", "getDataOnFilterChangeDelay", "pageSize"]);

      var _this$state = this.state,
          page = _this$state.page,
          pages = _this$state.pages,
          data = _this$state.data,
          loading = _this$state.loading;
      return React__default.createElement(table, _rollupPluginBabelHelpers._extends({}, props, {
        manual: true,
        page: page,
        pages: pages,
        pageSize: pageSize,
        data: data.slice(page * pageSize, (page + 1) * pageSize),
        loading: loading,
        defaultFilterMethod: this.onFilterUpdate,
        defaultSortMethod: this.onSortUpdate,
        onPageChange: this.onPageChange,
        onFilteredChange: this.onFiltersUpdate,
        onSortedChange: this.onSortsUpdate
      }));
    }
  }]);

  return ManualTable;
}(React__default.Component)) || _class;

ManualTable.defaultProps = {
  getDataOnFilterChangeDelay: 350,
  pageSize: 15
};
ManualTable.propTypes = {
  /**
   * Набор фильтров таблицы по умолчанию
   */
  defaultFilter: index.PropTypes.object,

  /**
   * Набор сортировок таблицы по умолчанию
   */
  defaultSort: index.PropTypes.object,

  /**
   * Функция, вызываемая таблицей для получения страницы данных
   *
   * @param {Object} filter - Текущий набор фильтров таблицы
   * <br>
   * @param {Object} sort - Текущий набор сортировок таблицы
   * <br>
   * @param {number} page - Страница данных для загрузки
   * <br>
   * @param {number} pageSize - Количество записей для загрузки на странице
   * <br>
   * @param {Function} onFinish - Функция, в которую следует передать полученные данные
   */
  getData: index.PropTypes.func.isRequired,

  /**
   * Задержка перед выполнением запроса данных при обновлении фильтров таблицы, в миллисекундах
   *
   * @default 350
   */
  getDataOnFilterChangeDelay: index.PropTypes.number,

  /**
   * Данное свойство игнорируется компонентом.
   * <br>
   * Данные в компонент "Ручной таблицы" следует передавать через функцию getData.
   *
   * @ignore
   */
  data: index.PropTypes.arrayOf(index.PropTypes.object)
};

module.exports = ManualTable;
