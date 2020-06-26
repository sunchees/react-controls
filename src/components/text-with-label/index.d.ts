import React from "react";
import { WrapWithLabelProps } from "../wrap-with-label";
import { TextProps } from "../text";

export interface TextWithLabelProps
  extends React.HTMLProps<WrapWithLabelProps> {
  /**
   * Скрывает компонент в случае, если textProps.value не указан
   * По умолчанию: true
   */
  hideIfEmpty?: PropTypes.bool,
  /**
   * Свойства, передаваемые вложенному компоненту <Text />
   */
  textProps?: TextProps;
}

/**
 * Компонент текста с добавленным заголовком.
 * Представляет собой компонент <Text />, обернутый в компонент <WrapWithLabel />.
 */
declare class TextWithLabel extends React.Component<TextWithLabelProps> {}

export default TextWithLabel;
