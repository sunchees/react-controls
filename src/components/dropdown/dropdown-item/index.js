import React from 'react';
import autobind from 'autobind-decorator';
import Button from '../../button';
import { getListItemValue } from '../../../utils';

export class DropdownItem extends React.PureComponent {
  @autobind
  onMouseDown() {
    this.props.onMouseDown(this.props.item);
  }

  render() {
    return (
      <Button
        className={this.props.className}
        onMouseDown={this.onMouseDown}
        disabled={this.props.disabled}
      >
        {this.props.item
          ? getListItemValue(this.props.item, this.props.accessor)
          : null}
      </Button>
    );
  }
}
