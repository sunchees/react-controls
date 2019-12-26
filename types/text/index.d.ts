import * as React from "react";

export interface TextProps {
  value: string
  capitalized?: boolean,
  bold?: boolean
}

declare class Text extends React.Component<TextProps, any> {}

export default Text;