import React from 'react';
import autobind from 'autobind-decorator';
import ContentHeightScrollbar from '../content-height-scrollbar';
import Button from '../button';
import './dropdown.css';

class DefaultDropdownItem extends React.PureComponent {
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
        {this.props.displayField
          ? this.props.item[this.props.displayField]
          : this.props.item}
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
      selected: this.props.defaultItem || null
    };

    this.scrollbar = null;
  }

  componentDidUpdate(prevProps) {
    if (
      !this.props.defaultItem !== this.state.selected &&
      !prevProps.defaultItem !== this.props.defaultItem
    )
      this.setState({ selected: this.props.defaultItem });
  }

  onBlur() {
    this.setState({ open: false });
  }

  onItemClick(item) {
    this.setState({ selected: item });
    if (this.props.onChange) this.props.onChange(item, this.props.name);
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
      items = [],
      displayField,
      defaultItem,
      onChange,
      error,
      disabled,
      scrollbarProps = {},
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
          item={this.state.selected}
          displayField={displayField}
        />
        {this.state.open && items ? (
          <div className='dropdown__content-wrap'>
            <ContentHeightScrollbar
              {...scrollbarProps}
              className={`dropdown__scrollbar ${scrollbarProps.className || ''}`}
            >
              {items.map((item, index) => (
                <ItemComponent
                  key={index}
                  className={`dropdown__item ${
                    item === this.state.selected ? 'selected' : ''
                  }`}
                  selected={item === this.state.selected}
                  onMouseDown={this.onItemClick}
                  item={item}
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
