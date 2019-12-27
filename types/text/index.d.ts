import React from 'react';

export interface TextProps extends React.HTMLProps<HTMLSpanElement> {
  value: string;
  capitalized?: boolean;
  bold?: boolean;
}

declare class Text extends React.Component<TextProps, any> {}

export default Text;