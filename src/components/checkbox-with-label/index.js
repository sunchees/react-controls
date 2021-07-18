import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import Checkbox from '../checkbox';
import Text from '../text';
import './checkbox-with-label.css';

/**
 * Checkbox with label
 */
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

CheckboxWithLabel.propTypes = {
  /**
   * Adds checkmark to checkbox.
   * Also applies 'checked' selector to the component.
   */
  checked: PropTypes.bool,
  /**
   * Function that will be called when checkbox is clicked.
   * @param {any=} item - Item associated with this checkbox. Set by the 'item' component prop.
   * <br>
   * @param {string=} name - Checkbox name. Set by the 'name' component prop.
   */
  onClick: PropTypes.func,
  /**
   * Item associated with this checkbox
   */
  item: PropTypes.any,
  /**
   * Checkbox name
   */
  name: PropTypes.string,
  /**
   * Label displayed next to checkbox
   */
  label: PropTypes.string,
  /**
   * Disables the checkbox.
   * Also applies 'disabled' selector to the component wrap.
   */
  disabled: PropTypes.bool
};