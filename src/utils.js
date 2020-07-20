import isFunction from 'lodash/isFunction';

export function getListItemValue(item, accessor) {
  return item
    ? accessor
      ? isFunction(accessor)
        ? accessor(item)
        : item[accessor]
      : `${item}`
    : '';
}
