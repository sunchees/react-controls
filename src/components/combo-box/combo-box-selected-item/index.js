import React from 'react';
import autobind from 'autobind-decorator';
import { getListItemValue } from '../../../utils';
import Row from '../../row';
import Text from '../../text';
import Button from '../../button';
import './combo-box-selected-item.css';

export class ComboBoxSelectedItem extends React.PureComponent {
  @autobind
  onDeselectClick() {
    this.props.onDeselect();
  }

  render() {
    const { className = '', item, accessor, disabled } = this.props;

    return (
      <Row className={`combo-box-selected-item ${disabled ? 'disabled' : ''} ${className}`}>
        <Text
          className='combo-box-selected-item__value'
          multiline={false}
          value={getListItemValue(item, accessor)}
        />
        <Button
          className='combo-box-selected-item__deselect-button'
          onClick={this.onDeselectClick}
          disabled={disabled}
        >
          ✕
        </Button>
      </Row>
    );
  }
}
