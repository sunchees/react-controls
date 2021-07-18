import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import Button from '../button';
import './checkbox.css';

/**
 * Basic checkbox component
 */
export default class Checkbox extends React.PureComponent {
  @autobind
  onClick() {
    if (this.props.onClick) this.props.onClick(this.props.item, this.props.name);
  }

  render() {
    const { className = '', checked, item, name, onClick, ...props } = this.props;

    return (
      <Button
        {...props}
        className={`checkbox ${checked ? 'checked' : ''} ${className}`}
        onClick={this.onClick}
      >
        {checked ? '✔' : ''}
      </Button>
    );
  }
}

Checkbox.propTypes = {
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
  name: PropTypes.string
};