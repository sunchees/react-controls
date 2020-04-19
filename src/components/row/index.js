import React from 'react';
import './row.css';

/**
 * Вспомогательный компонент для упрощения верстки и читаемости разметки.
 * Представляет собой обертку над HTML-элементом div с примененными стилями для расположения дочерних элементов в ряд.
 */
const Row = ({ className = '', children, ...props }) => (
  <div className={`row ${className}`} {...props}>
    {children}
  </div>
);

export default Row;
