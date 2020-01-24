import React from 'react';
import autobind from 'autobind-decorator';
import Checkbox from '../checkbox';
import Text from '../text';
import './checkbox-with-label.css';

export default class CheckboxWithLabel extends React.Component {
  @autobind
  onClick() {
    if (this.props.onClick && !this.props.disabled) this.props.onClick(this.props.item, this.props.name);
  }

  render() {
    const {
      className = '',
      checked,
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
        className={`checkbox-with-label ${disabled ? 'disabled' : ''} ${className}`}
        onClick={this.onClick}
      >
        <Checkbox className='checkbox-with-label__checkbox' checked={checked} disabled={disabled} />
        {label ? (
          <Text className='checkbox-with-label__label' value={label} />
        ) : null}
      </div>
    );
  }
}
