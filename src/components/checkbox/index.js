import React from 'react';
import autobind from 'autobind-decorator';
import Button from '../button';
import './checkbox.css';

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
