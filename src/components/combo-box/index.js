import React from 'react';
import PropTypes from 'prop-types';
import includes from 'lodash/includes';
import toLower from 'lodash/toLower';
import { ReactHeight } from 'react-height';
import autobind from 'autobind-decorator';
import Scrollbar from '../scrollbar';
import Button from '../button';
import { callbackOnFocusChange } from '../../../utils';
import Input from '../input';
import './combo-box.css';
import { includesString } from '../../../../common/utils';

export default class ComboBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      selected: '',
      filter: ''
    };

    this.scrollbar = null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.onChange && this.state.selected !== prevState.selected)
      this.props.onChange(this.state.selected);
    if (
      this.props.defaultValue !== this.state.selected &&
      prevProps.defaultValue !== this.props.defaultValue
    )
      this.setState({ selected: this.props.defaultValue });
  }

  @autobind
  onBlur(e) {
    callbackOnFocusChange(e, this.toggleDropdown, this.state.open);
  }

  @autobind
  onValueClick(e) {
    this.toggleDropdown();
    this.setState({
      selected: e.target.textContent,
      filter: e.target.textContent
    });
  }

  @autobind
  setScrollbarRef(scrollbar) {
    this.scrollbar = scrollbar;
  }

  @autobind
  setScrollbarHeight(height) {
    if (this.scrollbar)
      this.scrollbar.scrollbar.container.style.height = `${height}px`;
  }

  @autobind
  setFilter(filter) {
    this.setState({ filter });
  }

  getSelected() {
    return this.state.selected;
  }

  @autobind
  toggleDropdown() {
    this.setState({ open: !this.state.open });
  }

  resetSelected() {
    this.setState({ selected: null });
  }

  render() {
    return (
      <div
        className={`combo-box ${this.state.open ? 'open' : ''} ${
          this.props.error ? 'error' : ''
        } ${this.props.className}`}
        onBlur={this.onBlur}
      >
        <Input
          className='combo-box__title'
          onFocus={this.toggleDropdown}
          disabled={this.props.disabled}
          onChange={this.setFilter}
          value={this.state.filter}
        />
        {this.state.open && this.props.values ? (
          <div className='combo-box__content-wrap'>
            <Scrollbar
              ref={this.setScrollbarRef}
              className='combo-box__scrollbar'
            >
              <ReactHeight onHeightReady={this.setScrollbarHeight}>
                {this.props.values
                  .filter(value => includesString(value, this.state.filter))
                  .map((value, index) => (
                    <Button
                      key={index}
                      className={`combo-box__item ${
                        value === this.state.selected ? 'selected' : ''
                      }`}
                      onClick={this.onValueClick}
                    >
                      {value}
                    </Button>
                  ))}
              </ReactHeight>
            </Scrollbar>
          </div>
        ) : null}
      </div>
    );
  }
}

ComboBox.propTypes = {
  defaultValue: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

ComboBox.defaultProps = {
  defaultValue: '',
  className: ''
};
