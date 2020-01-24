import React from 'react';
import autobind from 'autobind-decorator';
import Scrollbars from 'react-custom-scrollbars';
import './scrollbar.css';

@autobind
class Scrollbar extends React.Component {
  constructor(props) {
    super(props);

    this.values = {};
    this.prevValues = {};

    this.state = {
      horizontalTrackHidden: true,
      verticalTrackHidden: true
    };
  }

  onScroll() {
    const values = this.scrollbar.getValues();
    if (
      this.props.onScrollToTop &&
      this.values.top !== values.top &&
      values.top === 0
    )
      this.props.onScrollToTop({ ...this.values }, values);
  }

  onUpdate(values) {
    const horizontalTrackHidden = values.scrollWidth <= values.clientWidth;
    const verticalTrackHidden = values.scrollHeight <= values.clientHeight;

    if (
      this.state.horizontalTrackHidden !== horizontalTrackHidden ||
      this.state.verticalTrackHidden !== verticalTrackHidden
    )
      this.setState({
        horizontalTrackHidden,
        verticalTrackHidden
      });

    this.prevValues = this.values;
    if (this.props.onUpdate)
      this.props.onUpdate({ ...this.prevValues }, values);
    this.values = values;
  }

  setRef(scrollbar) {
    this.scrollbar = scrollbar;
    this.container = scrollbar ? scrollbar.container : null;
  }

  isAtTheBottom() {
    return this.values.top === 1;
  }

  scrollTop(value) {
    this.scrollbar.scrollTop(value);
  }

  scrollToBottom() {
    this.scrollbar.scrollToBottom();
  }

  renderHorizontalTrack() {
    return (
      <div
        className={`scrollbar__track horizontal ${
          this.state.horizontalTrackHidden ? 'hidden' : ''
        }`}
      />
    );
  }

  renderVerticalTrack() {
    return (
      <div
        className={`scrollbar__track vertical ${
          this.state.verticalTrackHidden ? 'hidden' : ''
        }`}
      />
    );
  }

  renderThumb({ style, ...props }) {
    return <div className='scrollbar__thumb' style={style} {...props} />;
  }

  render() {
    const {
      className = '',
      children,
      onScrollToTop,
      onUpdate,
      ...props
    } = this.props;

    return (
      <Scrollbars
        {...props}
        className={`scrollbar ${className || ''}`}
        ref={this.setRef}
        onScroll={this.onScroll}
        onUpdate={this.onUpdate}
        renderTrackHorizontal={this.renderHorizontalTrack}
        renderThumbHorizontal={this.renderThumb}
        renderTrackVertical={this.renderVerticalTrack}
        renderThumbVertical={this.renderThumb}
      >
        {children}
      </Scrollbars>
    );
  }
}

export default Scrollbar;
