import React from "react";
import { WrapWithLoaderProps } from "../wrap-with-loader";
import { ComboBoxWithLabelProps } from "../combo-box-with-label";

export interface ComboBoxWithExternalLoaderProps
  extends React.HTMLProps<WrapWithLoaderProps> {
  /**
   * Задержка перед вызовом функции props.getData после изменения фильтра выпадающего списка, в мс. По умолчанию равно 1000мс.
   */
  searchDelay?: number;
  /**
   * Минимальное количество символов в фильтре выпадающего списка для вызова функции props.getData. По умолчанию равно 3.
   */
  minimumFilterLength?: number;
  /**
   * Функция, вызываемая выпадающим списком для получения данных на основе фильтра
   *
   * @param {string} filter - Фильтр выпадающего списка
   * @param {Function} onFinish - Функция, в которую следует передать полученные данные
   */
  getData: (filter: string, onFinish: (data: Array<Object>) => void) => void;
  /**
   * Свойства, передаваемые вложенному компоненту <ComboBoxWithLabel />
   */
  comboBoxWithLabelProps?: ComboBoxWithLabelProps;
}

/**
 * Компонент выпадающего списка с фильтром, с логикой асинхронной загрузки данных в зависимости от фильтра.
 */
declare class ComboBoxWithExternalLoader extends React.Component<
  ComboBoxWithExternalLoaderProps
> {}

export default ComboBoxWithExternalLoader;
