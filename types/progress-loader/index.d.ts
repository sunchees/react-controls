import React from 'react';
import { CircularProgressbarProps } from 'react-circular-progressbar/dist/types';

/**
  * @property percentage - Процент заполнения лоадера.
  * @property hidePercentage - Позволяет скрыть отображение надписи `{percentage}%` внутри лоадера. 
  * @property circularProgressbarProps - Параметры, передаваемые во внутренний компонент <CircularProgressbar />
  * @see https://www.npmjs.com/package/react-circular-progressbar
  */
export interface ProgressLoaderProps extends React.HTMLProps<HTMLDivElement> {
  percentage: number;
  hidePercentage?: boolean;
  circularProgressbarProps?: CircularProgressbarProps;
}

/**
 * Компонент кругового лоадера с отображением прогресса.
 * Представляет собой обертку над HTML-элементом <div /> с вложенным компонентом <CircularProgressbar/>.
 * @see https://www.npmjs.com/package/react-circular-progressbar
 */
declare class ProgressLoader extends React.Component<ProgressLoaderProps, any> {}

export default ProgressLoader;