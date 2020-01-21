import React from 'react';
import autobind from 'autobind-decorator';
import Radio from '../radio';
import Text from '../text';
import './radio-with-label.css';

export default class RadioWithLabel extends React.PureComponent {
  @autobind
  onClick() {
    if (this.props.onClick && !this.props.disabled) this.props.onClick(this.props.item, this.props.name);
  }

  render() {
    const {
      className = '',
      selected,
      item,
      name,
      onClick,
      disabled,
      label,
      ...props
    } = this.props;

    return (
      <div
        {...props}
        className={`radio-with-label ${disabled ? 'disabled' : ''} ${className}`}
        onClick={this.onClick}
      >
        <Radio className='radio-with-label__radio' selected={selected} disabled={disabled} />
        {label ? (
          <Text className='radio-with-label__label' value={label} />
        ) : null}
      </div>
    );
  }
}
