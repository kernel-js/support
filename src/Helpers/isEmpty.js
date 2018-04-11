const isEmptyLodash = require('lodash/isEmpty');

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 * String are considered empty if they are black after trim
 * Numeric are not considered empty
 * Boolean are not considered empty
 *
 * @param   {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * isEmpty(undefined);
 * // => true
 *
 * isEmpty(null);
 * // => true
 *
 * isEmpty(true);
 * // => false
 *
 * isEmpty(1);
 * // => false
 *
 * isEmpty([1, 2, 3]);
 * // => false
 *
 * isEmpty({ 'a': 1 });
 * // => false
 */
const isEmpty = (value) => {
  if (value == null || value === undefined) {
    return true;
  }

  if (typeof value === 'boolean') {
    return false;
  }

  if (typeof value === 'function') {
    return false;
  }

  if (typeof value === 'number' && !isNaN(value)) {
    return false;
  }

  if (typeof value === 'string' && value.trim() === '') {
    return true;
  }

  if (value instanceof Date) {
    return false;
  }

  return isEmptyLodash(value);
}

export default isEmpty;