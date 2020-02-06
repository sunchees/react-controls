import React from 'react';
import { TableProps } from 'react-table-6';

export interface ManualTableProps extends TableProps {
  /**
   * Набор фильтров таблицы по умолчанию
   */
  defaultFilter?: Object,
  /**
   * Набор сортировок таблицы по умолчанию
   */
  defaultSort?: Object,
  /**
   * Функция, вызываемая таблицей для получения страницы данных
   * 
   * @param {Object} filter - Текущий набор фильтров таблицы
   * @param {Object} sort - Текущий набор сортировок таблицы
   * @param {number} page - Страница данных для загрузки
   * @param {number} pageSize - Количество записей для загрузки на странице
   * @param {Function} onFinish - Функция, в которую следует передать полученные данные
   */
  getData: (
    filter: Object,
    sort: Object,
    page: number,
    pageSize: number,
    onFinish: (data: Array<Object>) => void
  ) => void,
  /**
   * Задержка перед выполнением запроса данных при обновлении фильтров таблицы, в миллисекундах
   * 
   * @default 350
   */
  getDataOnFilterChangeDelay?: number,

  /**
   * Данное свойство игнорируется компонентом
   * Данные в компонент "Ручной таблицы" следует передавать через функцию getData
   * 
   * @ignore
   */
  data: Array<Object>
}

/**
 * Компонент таблицы, управление которой осуществляется вручную.
 * Данную таблицу следует использовать в случае, когда необходимо реализовать постраничную загрузку данных с сервера.
 * Представляет собой расширение компонента [ReactTable (v6)](https://www.npmjs.com/package/react-table-6)
 */
declare class ManualTable extends React.Component<ManualTableProps> {}

export default Table;