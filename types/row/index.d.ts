import React from 'react';

/**
 * Вспомогательный компонент для упрощения верстки и читаемости разметки.
 * Представляет собой обертку над HTML-элементом <div /> с примененными стилями для расположения дочерних элементов в ряд.
 */
declare class Row extends React.Component<React.HTMLProps<HTMLDivElement>, any> {}

export default Row;