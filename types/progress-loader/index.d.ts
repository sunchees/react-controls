import React from 'react';
import { CircularProgressbarProps } from 'react-circular-progressbar/dist/types';

export interface ProgressLoaderProps extends React.HTMLProps<HTMLDivElement> {
  /** Процент заполнения лоадера */
  percentage: number;
  /** Позволяет скрыть отображение надписи `{percentage}%` внутри лоадера */
  hidePercentage?: boolean;
  /**
   * Параметры, передаваемые во внутренний компонент <CircularProgressbar/> 
   * @see https://www.npmjs.com/package/react-circular-progressbar
   */
  circularProgressbarProps?: CircularProgressbarProps;
}

/**
 * Компонент кругового лоадера с отображением прогресса.
 * Представляет собой обертку над HTML-элементом <div /> с вложенным компонентом <CircularProgressbar/>.
 * @see https://www.npmjs.com/package/react-circular-progressbar
 */
declare class ProgressLoader extends React.Component<ProgressLoaderProps> {}

export default ProgressLoader;