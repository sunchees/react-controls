import React from 'react';
import autobind from 'autobind-decorator';
import isEqual from 'lodash/isEqual';
import map from 'lodash/map';
import ContentHeightScrollbar from '../content-height-scrollbar';
import Button from '../button';
import './dropdown.css';

class DefaultDropdownItem extends React.PureComponent {
  @autobind
  onMouseDown() {
    this.props.onMouseDown(this.props.value);
  }

  render() {
    return (
      <Button
        className={this.props.className}
        onMouseDown={this.onMouseDown}
        disabled={this.props.disabled}
      >
        {this.props.value instanceof Object
          ? this.props.value[this.props.displayField]
          : this.props.value}
      </Button>
    );
  }
}

@autobind
class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      selected: this.props.defaultValue || null
    };

    this.scrollbar = null;
  }

  componentDidUpdate(prevProps) {
    if (
      !isEqual(this.props.defaultValue, this.state.selected) &&
      !isEqual(prevProps.defaultValue, this.props.defaultValue)
    )
      this.setState({ selected: this.props.defaultValue });
  }

  onBlur() {
    this.setState({ open: false });
  }

  onValueClick(value) {
    this.setState({ selected: value });
    if (this.props.onChange) this.props.onChange(value);
  }

  getSelected() {
    return this.state.selected;
  }

  toggleDropdown() {
    this.setState({ open: !this.state.open });
  }

  resetSelected() {
    this.setState({ selected: null });
  }

  render() {
    const {
      className = '',
      ItemComponent = DefaultDropdownItem,
      values,
      displayField,
      defaultValue,
      onChange,
      error,
      disabled,
      ...props
    } = this.props;

    return (
      <div
        {...props}
        className={`dropdown ${this.state.open ? 'open' : ''} ${
          error ? 'error' : ''
        } ${className}`}
        onBlur={this.onBlur}
      >
        <ItemComponent
          className='dropdown__title'
          onMouseDown={this.toggleDropdown}
          disabled={disabled}
          value={this.state.selected}
          displayField={displayField}
        />
        {this.state.open && values ? (
          <div className='dropdown__content-wrap'>
            <ContentHeightScrollbar className='dropdown__scrollbar'>
              {map(values, (value, index) => (
                <ItemComponent
                  key={index}
                  className={`dropdown__item ${
                    value === this.state.selected ? 'selected' : ''
                  }`}
                  selected={isEqual(value, this.state.selected)}
                  onMouseDown={this.onValueClick}
                  value={value}
                  displayField={displayField}
                />
              ))}
            </ContentHeightScrollbar>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
