import React from 'react';
import autobind from 'autobind-decorator';
import MaskedInput from 'react-text-mask';
import './input.css';

const KEY_CODE = {
  ENTER: 13,
  ESCAPE: 27
};

@autobind
class Input extends React.Component {
  constructor(props) {
    super(props);

    this.input = null;
    this.value = this.props.defaultValue || this.props.value;

    this.state = {
      focused: false,
      key: Math.random()
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.value !== nextProps.value &&
      nextProps.value !== this.value
    ) {
      this.value = nextProps.value;
      this.setState({ key: Math.random() });
    }

    return (
      this.props.secure !== nextProps.secure ||
      this.props.disabled !== nextProps.disabled ||
      this.props.className !== nextProps.className ||
      this.props.error !== nextProps.error ||
      this.props.mask !== nextProps.mask ||
      this.props.placeholder !== nextProps.placeholder ||
      this.state.key !== nextState.key
    );
  }

  onFocus() {
    this.setState({ focused: true });
    if (this.props.onFocus) this.props.onFocus();
  }

  onBlur(e) {
    this.setState({ focused: false });
    if (this.props.onBlur) this.props.onBlur(e);
  }

  onChange(e) {
    const value = e.target.value;
    this.value = value;
    if (this.props.onChange) this.props.onChange(value, this.props.name);
  }

  onKeyDown(e) {
    if (this.props.onKeyDown) this.props.onKeyDown(e);
    if (e.keyCode == KEY_CODE.ENTER && this.props.onEnterPress) {
      e.preventDefault();
      this.props.onEnterPress(e.target.value);
      if (this.props.blurOnEnter !== false) document.activeElement.blur();
    }
    if (e.keyCode == KEY_CODE.ESCAPE && this.props.onEscapeKeyPress) {
      e.preventDefault();
      this.props.onEscapeKeyPress(e.target.value);
    }
  }

  setInputRef(input) {
    this.input = input;

    if (this.props.forwardRef) this.props.forwardRef(input);
  }

  focus() {
    this.input.focus();
  }

  render() {
    const {
      className = '',
      error,
      defaultValue,
      value,
      secure,
      placeholder,
      disabled,
      autoFocus,
      mask,
      guide = false,
      showMask = false,
      maxLength,
      onFocus,
      onBlur,
      onKeyDown,
      onEnterPress,
      onEscapeKeyPress,
      onChange,
      name,
      forwardRef,
      blurOnEnter,
      ...props
    } = this.props;

    return (
      <MaskedInput
        {...props}
        key={this.state.key}
        className={`input ${error ? 'error' : ''} ${className}`}
        ref={this.setInputRef}
        value={value || defaultValue}
        type={secure ? 'password' : 'text'}
        placeholder={placeholder}
        disabled={disabled}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        autoFocus={autoFocus}
        mask={mask || false}
        guide={guide}
        showMask={showMask}
        maxLength={maxLength}
      />
    );
  }
}

export default Input;
