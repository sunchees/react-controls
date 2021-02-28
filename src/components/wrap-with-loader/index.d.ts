import React from "react";

export interface WrapWithLoaderProps extends React.HTMLProps<HTMLDivElement> {
  /**
   * Флаг, указывающий на необходимость отрисовки лоадера
   */
  loading?: boolean;
  /**
   * Класс компонента для отрисовки лоадера. По умолчанию используется DashLoader
   */
  LoaderComponent?: React.Component<>;
}

/**
 * Компонент-обертка, добавляющий к дочернему компоненту опциональный лоадер.
 * Основано на базе компонента <Row />
 */
declare class WrapWithLoader extends React.Component<WrapWithLoaderProps> {}

export default WrapWithLoader;
