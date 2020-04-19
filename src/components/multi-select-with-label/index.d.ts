import React from 'react';
import { WrapWithLabelProps } from '../wrap-with-label';
import { MultiSelectProps } from '../multi-select';

export interface MultiSelectWithLabelProps extends React.HTMLProps<WrapWithLabelProps> {
  /**
   * Свойства, передаваемые вложенному компоненту <MultiSelect />
   */
  multiSelectProps?: MultiSelectProps;
}

/**
 * Компонент списка с множественным выбором с фильтром с добавленным заголовком.
 * Представляет собой компонент <MultiSelect />, обернутый в компонент <WrapWithLabel />.
 */
declare class MultiSelectWithLabel extends React.Component<MultiSelectWithLabelProps> {}

export default MultiSelectWithLabel;