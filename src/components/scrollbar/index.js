import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import Scrollbars from 'react-custom-scrollbars';
import './scrollbar.css';

/**
 * Компонент-обертка, добавляющий к контенту скроллбар.
 * Представляет собой обертку над компонентом ReactCustomScrollbars и расширяет все его свойства.
 * @see [Документация ReactCustomScrollbars](https://www.npmjs.com/package/react-custom-scrollbars)
 */
@autobind
class Scrollbar extends React.Component {
  constructor(props) {
    super(props);

    this.values = {};
    this.prevValues = {};

    this.state = {
      horizontalTrackHidden: true,
      verticalTrackHidden: true
    };
  }

  onScroll() {
    const values = this.scrollbar.getValues();

    if (this.props.onScroll)
      this.props.onScroll({ ...this.values }, values);

    if (this.values.top !== values.top) {
      if (values.top === 0 && this.props.onScrollToTop)
        this.props.onScrollToTop({ ...this.values }, values);

      if (values.top === 1 && this.props.onScrollToBottom)
        this.props.onScrollToBottom({ ...this.values }, values);
    }

    if (this.values.left !== values.left) {
      if (values.left === 0 && this.props.onScrollToLeft)
        this.props.onScrollToLeft({ ...this.values }, values);

      if (values.left === 1 && this.props.onScrollToRight)
        this.props.onScrollToRight({ ...this.values }, values);
    }
  }

  onUpdate(values) {
    const horizontalTrackHidden = values.scrollWidth <= values.clientWidth;
    const verticalTrackHidden = values.scrollHeight <= values.clientHeight;

    if (
      this.state.horizontalTrackHidden !== horizontalTrackHidden ||
      this.state.verticalTrackHidden !== verticalTrackHidden
    )
      this.setState({
        horizontalTrackHidden,
        verticalTrackHidden
      });

    this.prevValues = this.values;
    if (this.props.onUpdate)
      this.props.onUpdate({ ...this.prevValues }, values);
    this.values = values;
  }

  setRef(scrollbar) {
    this.scrollbar = scrollbar;
    this.container = scrollbar ? scrollbar.container : null;
  }

  /**
   * Позволяет узнать, находится ли вертикальный скроллбар в самой верхней позиции.
   *
   * @returns {Boolean}
   *
   * @public
   */
  isAtTheTop() {
    return this.values.top === 0;
  }

  /**
   * Позволяет узнать, находится ли вертикальный скроллбар в самой нижней позиции.
   *
   * @returns {Boolean}
   *
   * @public
   */
  isAtTheBottom() {
    return this.values.top === 1;
  }

  /**
   * Позволяет узнать, находится ли горизонтальный скроллбар в самой левой позиции.
   *
   * @returns {Boolean}
   *
   * @public
   */
  isOnTheLeft() {
    return this.values.left === 0;
  }

  /**
   * Позволяет узнать, находится ли горизонтальный скроллбар в самой правой позиции.
   *
   * @returns {Boolean}
   *
   * @public
   */
  isOnTheRight() {
    return this.values.left === 1;
  }

  /**
   * Задает позицию вертикального скроллбара, в пикселях, где 0 - самая верхняя точка скроллбара
   * @param {number} value - позиция скроллбара в пикселях, отсчитывая сверху.
   *
   * @public
   */
  scrollTop(value) {
    this.scrollbar.scrollTop(value);
  }

  /**
   * Задает позицию горизонтального скроллбара, в пикселях, где 0 - самая левая точка скроллбара
   * @param {number} value - позиция скроллбара в пикселях, отсчитывая слева.
   *
   * @public
   */
  scrollLeft(value) {
    this.scrollbar.scrollLeft(value);
  }

  /**
   * Перемещает вертикальный скроллбар в самую верхнюю позицию.
   *
   * @public
   */
  scrollToTop() {
    this.scrollbar.scrollToTop();
  }

  /**
   * Перемещает вертикальный скроллбар в самую нижнюю позицию.
   *
   * @public
   */
  scrollToBottom() {
    this.scrollbar.scrollToBottom();
  }

  /**
   * Перемещает горизонтальный скроллбар в самую левую позицию.
   *
   * @public
   */
  scrollToLeft() {
    this.scrollbar.scrollToLeft();
  }

  /**
   * Перемещает горизонтальный скроллбар в самую правую позицию.
   *
   * @public
   */
  scrollToRight() {
    this.scrollbar.scrollToRight();
  }

  renderHorizontalTrack() {
    return (
      <div
        className={`scrollbar__track horizontal ${
          this.state.horizontalTrackHidden ? 'hidden' : ''
        }`}
      />
    );
  }

  renderVerticalTrack() {
    return (
      <div
        className={`scrollbar__track vertical ${
          this.state.verticalTrackHidden ? 'hidden' : ''
        }`}
      />
    );
  }

  renderThumb({ style, ...props }) {
    return <div className='scrollbar__thumb' style={style} {...props} />;
  }

  render() {
    const {
      className = '',
      children,
      onScroll,
      onScrollToTop,
      onScrollToBottom,
      onScrollToLeft,
      onScrollToRight,
      onUpdate,
      ...props
    } = this.props;

    return (
      <Scrollbars
        {...props}
        className={`scrollbar ${className || ''}`}
        ref={this.setRef}
        onScroll={this.onScroll}
        onUpdate={this.onUpdate}
        renderTrackHorizontal={this.renderHorizontalTrack}
        renderThumbHorizontal={this.renderThumb}
        renderTrackVertical={this.renderVerticalTrack}
        renderThumbVertical={this.renderThumb}
      >
        {children}
      </Scrollbars>
    );
  }
}

export default Scrollbar;

Scrollbar.propTypes = {
  /**
   * Функция, вызываемая при перемещении скроллбара
   * @param {Object} currentValues - текущие значения расположения и размеров скроллбара
   * <br>
   * @param {Object} nextValues - значения расположения и размеров скроллбара, которые будут применены после обновления компонента
   */
  onScroll: PropTypes.func,

  /**
   * Функция, вызываемая в случае, если скроллбар перемещают в самую верхнюю позицию
   * @param {Object} currentValues - текущие значения расположения и размеров скроллбара
   * <br>
   * @param {Object} nextValues - значения расположения и размеров скроллбара, которые будут применены после обновления компонента
   */
  onScrollToTop: PropTypes.func,

  /**
   * Функция, вызываемая в случае, если скроллбар перемещают в самую нижнюю позицию
   * @param {Object} currentValues - текущие значения расположения и размеров скроллбара
   * <br>
   * @param {Object} nextValues - значения расположения и размеров скроллбара, которые будут применены после обновления компонента
   */
  onScrollToBottom: PropTypes.func,

  /**
   * Функция, вызываемая в случае, если скроллбар перемещают в самую левую позицию
   * @param {Object} currentValues - текущие значения расположения и размеров скроллбара
   * <br>
   * @param {Object} nextValues - значения расположения и размеров скроллбара, которые будут применены после обновления компонента
   */
  onScrollToLeft: PropTypes.func,

  /**
   * Функция, вызываемая в случае, если скроллбар перемещают в самую правую позицию
   * @param {Object} currentValues - текущие значения расположения и размеров скроллбара
   * <br>
   * @param {Object} nextValues - значения расположения и размеров скроллбара, которые будут применены после обновления компонента
   */
  onScrollToRight: PropTypes.func,

  /**
   * Функция, вызываемая после обновления компонента скроллбара
   * @param {Object} prevValues - предыдущие значения расположения и размеров скроллбара
   * <br>
   * @param {Object} newValues - новые значения расположения и размеров скроллбара
   */
  onUpdate: PropTypes.func
};