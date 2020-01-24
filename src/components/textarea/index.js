import React from 'react';
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
      this.props.onEscapeKeyPress(this.value, this.props.name);
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

  getValue() {
    return this.input.value;
  }

  setValue(value) {
    this.input.value = value || '';
    this.adjustHeight();
  }

  focus() {
    this.input.focus();
  }

  adjustHeight(prevRows = this.input.rows) {
    const styles = getComputedStyle(this.input);
    const lineHeight = parseInt(styles.getPropertyValue('line-height')),
      minHeight = parseInt(styles.getPropertyValue('min-height'));

    const minRows = Math.ceil((minHeight || lineHeight) / lineHeight);
    this.input.rows = minRows;

    const rows = Math.ceil(
      (this.input.scrollHeight - (minHeight || lineHeight)) / lineHeight
    );

    this.input.rows = minRows + rows;

    if (prevRows !== this.input.rows && this.props.onHeightChange)
      this.props.onHeightChange(this.input.scrollHeight);
  }

  render() {
    const {
      className = '',
      onKeyDown,
      onEnterPress,
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
