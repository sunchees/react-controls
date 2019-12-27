import React from 'react';
import autobind from 'autobind-decorator';
import { CircularProgressbar } from 'react-circular-progressbar';
import './progress-loader.css';

export default class ProgressLoader extends React.PureComponent {
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
      circularProgressbarProps,
      ...props
    } = this.props;

    return (
      <div {...props} className={`progress-loader ${className} `}>
        <CircularProgressbar
          percentage={percentage}
          textForPercentage={this.textForPercentage}
          {...circularProgressbarProps}
        />
        {children}
      </div>
    );
  }
}
