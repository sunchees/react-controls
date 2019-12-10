import React from 'react';
import autobind from 'autobind-decorator';
import CircularProgressbar from 'react-circular-progressbar';
import './progressbar.css';

export default class Progressbar extends React.PureComponent {
  @autobind
  textForPercentage(percentage) {
    return this.props.hidePercentage ? null : `${percentage}%`;
  }

  render() {
    const {
      className = '',
      percentage,
      children,
      hidePercentage,
      ...props
    } = this.props;

    return (
      <div {...props} className={`progressbar ${className} `}>
        <CircularProgressbar
          percentage={percentage}
          textForPercentage={this.textForPercentage}
        />
        {children}
      </div>
    );
  }
}
