import React from 'react';
import autobind from 'autobind-decorator';
import { getListItemValue } from '../../../utils';
import Button from '../../button';

export class ComboBoxItem extends React.PureComponent {
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
