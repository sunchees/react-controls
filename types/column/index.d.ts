import React from 'react';

/**
 * Вспомогательный компонент для упрощения верстки и читаемости разметки.
 * Представляет собой обертку над HTML-элементом <div /> с примененными стилями для расположения дочерних элементов в столбец.
 */
declare class Column extends React.Component<React.HTMLProps<HTMLDivElement>, any> {}

export default Column;