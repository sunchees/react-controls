import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import { CircularProgressbar } from 'react-circular-progressbar';
import './progress-loader.css';

/**
 * Компонент кругового лоадера с отображением прогресса.
 * <br>
 * Представляет собой обертку над HTML-элементом div с вложенным компонентом CircularProgressbar.
 * <br>
 * [Документация CircularProgressbar](https://www.npmjs.com/package/react-circular-progressbar)
 */
export default class ProgressLoader extends React.PureComponent {
  @autobind
  textForPercentage(percentage) {
    return this.props.hidePercentage ? null : `${percentage}%`;
  }

  render() {
    const {
      className = '',
      value,
      displayValue,
      circularProgressbarProps,
      children,
      ...props
    } = this.props;

    return (
      <div {...props} className={`progress-loader ${className} `}>
        <CircularProgressbar
          value={value}
          text={displayValue ? `${value}%` : null}
          {...circularProgressbarProps}
        />
        {children}
      </div>
    );
  }
}

ProgressLoader.propTypes = {
  /** Процент заполнения лоадера */
  value: PropTypes.number,
  /** Определяет наличие внутри лоадера надписи `{value}%` */
  displayValue: PropTypes.bool,
  /**
   * Параметры, передаваемые во внутренний компонент CircularProgressbar.
   * <br>
   * [Документация CircularProgressbar](https://www.npmjs.com/package/react-circular-progressbar)
   */
  circularProgressbarProps: PropTypes.shape()
};