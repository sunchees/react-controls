import React from 'react';
import Text from '../text';
import Column from '../column';
import './wrap-with-label.css';

const WrapWithLabel = ({
  className = '',
  label,
  mandatory = false,
  children,
  emptyText
}) => (
  <Column
    className={`wrap-with-label ${mandatory ? 'mandatory' : ''} ${className}`}
  >
    <Text className='wrap-with-label__label' value={label} />
    <Column className='wrap-with-label__content'>
      {children instanceof Array && children.length
        ? children
        : children ||
          (emptyText ? (
            <Text className='wrap-with-label__empty-text' value={emptyText} />
          ) : null)}
    </Column>
  </Column>
);

export default WrapWithLabel;
