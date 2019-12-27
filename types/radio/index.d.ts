import React from 'react';

export interface RadioProps extends React.HTMLProps<HTMLButtonElement> {
  item: any;
  selected?: boolean;
}

declare class Radio extends React.Component<RadioProps, any> {}

export default Radio;