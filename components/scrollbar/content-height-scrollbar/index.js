import React from 'react';
import autobind from 'autobind-decorator';
import { ReactHeight } from 'react-height/lib/ReactHeight';
import Scrollbar from '../scrollbar';

class InnerContentHeightScrollbar extends React.Component {
  @autobind
  onHeightReady(height) {
    if (this.container) this.container.style.height = `${height}px`;
  }

  @autobind
  setRef(scrollbar) {
    this.scrollbar = scrollbar;
    this.container = scrollbar ? scrollbar.container : null;

    if (this.props.forwardRef) this.props.forwardRef(scrollbar);
  }

  render() {
    const { className = '', children, forwardRef, ...props } = this.props;

    return (
      <Scrollbar
        className={`content-height-scrollbar ${className}`}
        ref={this.setRef}
        {...props}
      >
        <ReactHeight onHeightReady={this.onHeightReady}>{children}</ReactHeight>
      </Scrollbar>
    );
  }
}

const ContentHeightScrollbar = React.forwardRef((props, ref) => (
  <InnerContentHeightScrollbar {...props} forwardRef={ref} />
));

export default ContentHeightScrollbar;
