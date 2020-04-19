import React from 'react';
import './column.css';

/**
 * Вспомогательный компонент для упрощения верстки и читаемости разметки.
 * Представляет собой обертку над HTML-элементом div с примененными стилями для расположения дочерних элементов в столбец.
 */
const Column = ({ className = '', children, ...props }) => (
  <div className={`column ${className}`} {...props}>
    {children}
  </div>
);

export default Column;
