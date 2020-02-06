import React from 'react';
import { WrapWithLabelProps } from '../wrap-with-label';
import { ComboBoxProps } from '../combo-box';

export interface ComboBoxWithLabelProps extends React.HTMLProps<WrapWithLabelProps> {
  /**
   * Свойства, передаваемые вложенному компоненту <ComboBox />
   */
  comboBoxProps?: ComboBoxProps;
}

/**
 * Компонент выпадающего списка с фильтром с добавленным заголовком.
 * Представляет собой компонент <ComboBox />, обернутый в компонент <WrapWithLabel />.
 */
declare class ComboBoxWithLabel extends React.Component<ComboBoxWithLabelProps> {}

export default ComboBoxWithLabel;