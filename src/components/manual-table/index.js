import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import isEqual from 'lodash/isEqual';
import Table from '../table';

/**
 * Компонент таблицы, управление которой осуществляется вручную.
 * <br>
 * Данную таблицу следует использовать в случае, когда необходимо реализовать постраничную загрузку данных с сервера.
 * <br>
 * Представляет собой расширение компонента [ReactTable (v6)](https://www.npmjs.com/package/react-table)
 */
@autobind
class ManualTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      page: 0,
      pages: 1,
      filter: { ...props.defaultFilter },
      sort: { ...props.defaultSort },
      loading: true,
      noMoreData: false
    };

    this.getDataHandle = null;
  }

  componentDidMount() {
    this._isMounted = true;
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!isEqual(this.props.defaultFilter, prevProps.defaultFilter))
      this.setState({ filter: { ...this.props.defaultFilter } });

    if (!isEqual(this.props.defaultSort, prevProps.defaultSort))
      this.setState({ sort: { ...this.props.defaultSort } });

    if (
      !isEqual(this.state.filter, prevState.filter) ||
      !isEqual(this.state.sort, prevState.sort)
    ) {
      clearTimeout(this.getDataHandle);
      this.getDataHandle = setTimeout(() => {
        this.setState({ page: 0, pages: 1, loading: true });
        this.getData();
      }, this.props.getDataOnFilterChangeDelay);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onFiltersUpdate(filters) {
    this.setState({
      filter: {
        ...filters.reduce(
          (acc, filter) => ({
            ...acc,
            [filter.id]: filter.value
          }),
          {}
        )
      }
    });
    return true;
  }

  onSortsUpdate(sorts) {
    this.setState({
      sort: {
        ...sorts.reduce(
          (acc, sort) => ({
            ...acc,
            [sort.id]: sort.desc ? -1 : 1
          }),
          {}
        )
      }
    });
    return true;
  }

  onPageChange(page) {
    this.setState({ page });
    if (page >= this.state.pages - 1 && !this.state.noMoreData) this.getData(page, true);
  }

  getData(page = 0, concatData = false) {
    if (!this._isMounted) return;
    clearTimeout(this.getDataHandle);

    this.setState({ loading: true });

    this.props.getData(
      this.state.filter,
      this.state.sort,
      page,
      this.props.pageSize,
      (data = []) => {
        if (!this._isMounted) return;

        const noMoreData = data.length < this.props.pageSize;

        this.setState({
          data: concatData ? [...this.state.data, ...data] : data,
          loading: false,
          pages: concatData
            ? noMoreData
              ? this.state.pages
              : this.state.pages + 1
            : noMoreData ? 1 : 2,
          noMoreData
        });
      }
    );
  }

  render() {
    const {
      defaultFilter,
      defaultSort,
      getData,
      getDataOnFilterChangeDelay,
      pageSize,
      ...props
    } = this.props;

    const {
      page,
      pages,
      data,
      loading
    } = this.state;

    return (
      <Table
        {...props}
        manual={true}
        page={page}
        pages={pages}
        pageSize={pageSize}
        data={data.slice(page * pageSize, (page + 1) * pageSize)}
        loading={loading}
        defaultFilterMethod={this.onFilterUpdate}
        defaultSortMethod={this.onSortUpdate}
        onPageChange={this.onPageChange}
        onFilteredChange={this.onFiltersUpdate}
        onSortedChange={this.onSortsUpdate}
      />
    );
  }
}

ManualTable.defaultProps = {
  getDataOnFilterChangeDelay: 350,
  pageSize: 15
};

ManualTable.propTypes = {
  /**
   * Набор фильтров таблицы по умолчанию
   */
  defaultFilter: PropTypes.object,
  /**
   * Набор сортировок таблицы по умолчанию
   */
  defaultSort: PropTypes.object,
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
  getData: PropTypes.func.isRequired,
  /**
   * Задержка перед выполнением запроса данных при обновлении фильтров таблицы, в миллисекундах
   *
   * @default 350
   */
  getDataOnFilterChangeDelay: PropTypes.number,
  /**
   * Данное свойство игнорируется компонентом.
   * <br>
   * Данные в компонент "Ручной таблицы" следует передавать через функцию getData.
   *
   * @ignore
   */
  data: PropTypes.arrayOf(PropTypes.object)
};

export default ManualTable;