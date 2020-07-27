import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import './textarea.css';

const isInternetExplorer = () => {
  const browser = window.navigator.userAgent;
  return browser.indexOf('MSIE') > 0 || !!browser.match(/Trident\/7\./);
};

const KEY_CODE = {
  ENTER: 13,
  ESCAPE: 27
};

/**
 * Компонент многострочного поля ввода.
 * <br>
 * Представляет собой обертку над HTML-элементом textarea с добавлением стилей и обработчиком вставки файлов из буфера обмена.
 */
@autobind
class Textarea extends React.PureComponent {
  constructor(props) {
    super(props);

    this.input = null;

    this.ie = isInternetExplorer();
  }

  componentDidMount() {
    this.adjustHeight(0);
  }

  onKeyDown(e) {
    if (this.props.onKeyDown) this.props.onKeyDown(e);
    if (e.keyCode == KEY_CODE.ENTER && this.props.onEnterPress && !e.shiftKey) {
      e.preventDefault();
      this.props.onEnterPress(this.value, this.props.name);
      if (this.props.blurOnEnter) document.activeElement.blur();
    }
    if (e.keyCode == KEY_CODE.ESCAPE && this.props.onEscapeKeyPress) {
      e.preventDefault();
      this.props.onEscapePress(this.value, this.props.name);
    }
  }

  onPaste(e) {
    const clipboardTextData = this.ie
      ? window.clipboardData.getData('Text')
      : e.clipboardData.getData('text/plain');
    if (
      !(clipboardTextData && clipboardTextData.length !== 0) &&
      !this.ie &&
      this.props.onClipboardFilePaste
    ) {
      e.preventDefault();
      /**
       * Почему-то файлы из буфера вытащить не удается.
       */
      const clipboardItems = e.clipboardData.items;
      for (let i = 0; i < clipboardItems.length; i++)
        if (clipboardItems[i].kind == 'file') {
          const file = clipboardItems[i].getAsFile();
          this.props.onClipboardFilePaste([file], this.props.name);
          break;
        }
    }
  }

  onChange() {
    this.adjustHeight();
    if (this.props.onChange)
      this.props.onChange(this.input.value, this.props.name);
  }

  setInputRef(input) {
    this.input = input;

    if (this.props.forwardRef) this.props.forwardRef(input);
  }

  /**
   * Возвращает текущее содержимое поля ввода
   *
   * @returns {string}
   *
   * @public
   */
  getValue() {
    return this.input.value;
  }

  /**
   * Задает содежимое поля ввода
   * @param {string} value - новое содержимое поля ввода
   *
   * @public
   */
  setValue(value) {
    this.input.value = value || '';
    this.adjustHeight();
  }

  /**
   * Переводит фокус (курсор) в поле ввода
   *
   * @public
   */
  focus() {
    this.input.focus();
  }

  adjustHeight(prevRows = this.input.rows) {
    const pageLeftOffset =
      window.pageXOffset ||
      (document.documentElement || document.body.parentNode || document.body)
        .scrollLeft;

    const pageTopOffset =
      window.pageYOffset ||
      (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;

    const styles = getComputedStyle(this.input);
    const lineHeight = parseInt(styles.getPropertyValue('line-height')),
      minHeight = parseInt(styles.getPropertyValue('min-height')),
      paddingTop = parseInt(styles.getPropertyValue('padding-top')),
      paddingBottom = parseInt(styles.getPropertyValue('padding-bottom'));

    const minRows =
      Math.ceil(
        ((minHeight || lineHeight) - (paddingTop + paddingBottom)) / lineHeight
      ) || 1;
    this.input.rows = minRows;

    const rows = Math.ceil(
      (this.input.scrollHeight -
        (minHeight || lineHeight) -
        (paddingTop + paddingBottom)) /
        lineHeight
    );

    this.input.rows = minRows + rows;

    if (prevRows !== this.input.rows && this.props.onHeightChange)
      this.props.onHeightChange(this.input.scrollHeight);

    // Восстанавливаем положение страницы на момент изменения размера TextArea. Это необходимо, т.к. прокручиваемая TextArea при изменении размеров также прокручивает всю веб-страинцу.
    window.scrollTo(pageLeftOffset, pageTopOffset);
  }

  render() {
    const {
      className = '',
      onKeyDown,
      onEnterPress,
      onEscapePress,
      onChange,
      onHeightChange,
      onClipboardFilePaste,
      name,
      forwardRef,
      ...props
    } = this.props;

    return (
      <textarea
        {...props}
        className={`textarea ${className}`}
        ref={this.setInputRef}
        onKeyDown={this.onKeyDown}
        onPaste={this.onPaste}
        onChange={this.onChange}
        rows={1}
      />
    );
  }
}

export default Textarea;

Textarea.propTypes = {
  /**
   * Обработчик события нажатия на клавишу Enter в поле ввода.
   * <br>
   * @param {string} value - текущее содержимое поля ввода.
   * <br>
   * @param {string=} name - название поля ввода, на основе заданного компоненту свойства "name".
   */
  onEnterPress: PropTypes.func,
  /**
   * Убирает фокус с поля ввода при нажатии клавиши Enter.
   */
  blurOnEnter: PropTypes.bool,
  /**
   * Обработчик события нажатия на клавишу Escape в поле ввода.
   * <br>
   * @param {string} value - текущее содержимое поля ввода
   * <br>
   * @param {string=} name - название поля ввода, на основе заданного компоненту свойства "name"
   */
  onEscapePress: PropTypes.func,
  /**
   * Функция для получения ссылки на вложенный компонент.
   *
   * @param {HTMLInputElement} ref - ссылка на компонент
   */
  forwardRef: PropTypes.func,
  /**
   * Обработчик события изменения содержимого поля ввода.
   * <br>
   * @param {string} value - текущее содержимое поля ввода
   * <br>
   * @param {string=} name - название поля ввода, на основе заданного компоненту свойства "name"
   */
  onChange: PropTypes.func,
  /**
   * Название поля ввода.
   */
  name: PropTypes.string,
  /**
   * Обработчик события изменения высоты поля ввода.
   *
   * @param {number} height - новая высота поля ввода
   */
  onHeightChange: PropTypes.func,
  /**
   * Обработчик события вставки файлов в поле ввода.
   * <br>
   * @param {Array<File>} files - массив файлов
   * <br>
   * @param {string=} name - название поля ввода, на основе заданного компоненту свойства "name"
   */
  onClipboardFilePaste: PropTypes.func
};
