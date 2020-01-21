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

  onChange(e) {
    this.value = e.target.value;
    if (this.props.onChange) this.props.onChange(this.value, this.props.name);
  }

  onKeyDown(e) {
    if (this.props.onKeyDown) this.props.onKeyDown(e);
    if (e.keyCode == KEY_CODE.ENTER && this.props.onEnterPress) {
      e.preventDefault();
      this.props.onEnterPress(this.value, this.props.name);
      if (this.props.blurOnEnter) document.activeElement.blur();
    }
    if (e.keyCode == KEY_CODE.ESCAPE && this.props.onEscapeKeyPress) {
      e.preventDefault();
      this.props.onEscapeKeyPress(this.value, this.props.name);
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
      mask,
      guide = false,
      showMask = false,
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
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        mask={mask || false}
        guide={guide}
        showMask={showMask}
      />
    );
  }
}

export default Input;
