import React from 'react';
import autobind from 'autobind-decorator';
import Radio from '../radio';
import Text from '../text';
import './radio-with-label.css';

export default class RadioWithLabel extends React.PureComponent {
  @autobind
  onClick() {
    if (this.props.onClick) this.props.onClick(this.props.item);
  }

  render() {
    const {
      className = '',
      selected,
      label,
      onClick,
      item,
      ...props
    } = this.props;

    return (
      <div
        {...props}
        className={`radio-with-label ${className}`}
        onClick={this.onClick}
      >
        <Radio className='radio-with-label__radio' selected={selected} />
        {label ? (
          <Text className='radio-with-label__label' value={label} />
        ) : null}
      </div>
    );
  }
}
