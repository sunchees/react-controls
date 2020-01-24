import PropTypes from 'prop-types';
import React from 'react';
import './tooltip.css';

export default class Tooltip extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      opened: false
    };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.disabled !== prevProps.disabled && this.props.disabled)
      this.setState({ opened: false });
  }

  onMouseEnter() {
    if (!this.props.disabled) this.setState({ opened: true });
  }

  onMouseLeave() {
    if (!this.props.disabled) this.setState({ opened: false });
  }

  render() {
    return (
      <div
        id={this.props.id}
        className={this.props.className}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.props.onClick}
        onMouseDown={this.props.onMouseDown}
      >
        {this.props.staticContent}
        {this.state.opened ? this.props.tooltipContent : null}
      </div>
    );
  }
}

Tooltip.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  staticContent: PropTypes.node,
  tooltipContent: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func
};

Tooltip.defaultProps = {
  id: '',
  className: ''
};
