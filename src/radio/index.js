import React from 'react';
import autobind from 'autobind-decorator';
import Button from '../button';
import './radio.css';

export default class Radio extends React.PureComponent {
  @autobind
  onClick() {
    if (this.props.onClick) this.props.onClick(this.props.item, this.props.name);
  }

  render() {
    const { className = '', selected, item, name, onClick, ...props } = this.props;

    return (
      <Button
        {...props}
        className={`radio ${selected ? 'selected' : ''} ${className}`}
        onClick={this.onClick}
      />
    );
  }
}
