import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import WrapWithLoader from '../wrap-with-loader';
import ComboBoxWithLabel from '../combo-box-with-label';
import './combo-box-with-external-loader.css';

const DEFAULT_SEARCH_DELAY = 1000;
const DEFAULT_MINIMUM_FILTER_LENGTH = 3;

/**
 * Компонент выпадающего списка с фильтром, с логикой асинхронной загрузки данных в зависимости от фильтра.
 */
class ComboBoxWithExternalLoader extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: !!((props.comboBoxWithLabelProps || {}).comboBoxProps || {})
        .defaultSelected,
      filter: ''
    };

    this.delayedSearch = null;
  }

  componentDidMount() {
    this._isMounted = true;

    const { defaultSelected, accessor } =
      (this.props.comboBoxWithLabelProps || {}).comboBoxProps || {};

    if (defaultSelected) {
      const defaultFilter = accessor
        ? typeof accessor === 'function'
          ? accessor(defaultSelected)
          : defaultSelected[name]
        : defaultSelected;

      this.getData(defaultFilter);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  @autobind
  onFilterChange(filter) {
    if (this.delayedSearch) {
      clearTimeout(this.delayedSearch);
      this.setState({ loading: false });
    }

    if (filter.length >= this.props.minimumFilterLength) {
      this.delayedSearch = setTimeout(() => {
        this.getData(filter);
      }, this.props.searchDelay);
      this.setState({ loading: true });
    }

    this.setState({ filter });
  }

  @autobind
  getData(filter) {
    this.setState({ loading: true });
    this.props.getData(filter, data => {
      if (this._isMounted)
        this.setState({
          data,
          loading: false
        });
    });
  }

  render() {
    const {
      className = '',
      minimumFilterLength,
      searchDelay,
      getData,
      comboBoxWithLabelProps = {},
      ...props
    } = this.props;

    const {
      inputProps,
      ...comboBoxProps
    } = comboBoxWithLabelProps.comboBoxProps;

    return (
      <WrapWithLoader
        {...props}
        className={`combo-box-with-external-loader ${className}`}
        loading={this.state.loading}
      >
        <ComboBoxWithLabel
          {...comboBoxWithLabelProps}
          comboBoxProps={{
            ...comboBoxProps,
            items: this.state.data,
            onFilterChange: this.onFilterChange,
            inputProps: {
              placeholder: `Для поиска введите ${minimumFilterLength} символа`,
              ...inputProps
            },
            disableFiltering: true,
            emptyText:
              this.state.loading ||
              this.state.filter.length < minimumFilterLength
                ? null
                : 'Ничего не найдено'
          }}
        />
      </WrapWithLoader>
    );
  }
}

export default ComboBoxWithExternalLoader;

ComboBoxWithExternalLoader.defaultProps = {
  searchDelay: DEFAULT_SEARCH_DELAY,
  minimumFilterLength: DEFAULT_MINIMUM_FILTER_LENGTH
};

ComboBoxWithExternalLoader.propTypes = {
  /**
   * Задержка перед вызовом функции props.getData после изменения фильтра выпадающего списка, в мс. По умолчанию равно 1000мс.
   */
  searchDelay: PropTypes.number,
  /**
   * Минимальное количество символов в фильтре выпадающего списка для вызова функции props.getData. По умолчанию равно 3.
   */
  minimumFilterLength: PropTypes.number,
  /**
   * Функция, вызываемая выпадающим списком для получения данных на основе фильтра
   *
   * @param {string} filter - Фильтр выпадающего списка
   * @param {Function} onFinish - Функция, в которую следует передать полученные данные
   */
  getData: PropTypes.func.isRequired,
  /**
   * Свойства компонента [ComobBoxWithLabel](/#comboBoxWithLabel).
   */
  comboBoxWithLabelProps: PropTypes.shape({})
};
