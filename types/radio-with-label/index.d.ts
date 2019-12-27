import React from 'react';

export interface RadioWithLabelProps extends React.HTMLProps<HTMLDivElement> {
  item: any;
  label: string;
  selected?: boolean;
}

declare class RadioWithLabel extends React.Component<RadioWithLabelProps, any> {}

export default RadioWithLabel;