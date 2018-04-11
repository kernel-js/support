/**
 * Convert `value` of string or number type to boolean
 *
 * Returns null if given value cannot be converted
 *
 * @param   {string|number|boolean} value The value to convert.
 * @returns {boolean|null}
 * @example
 *
 * toBoolean('false');
 * // => false
 *
 * toBoolean(0);
 * // => false
 *
 * toBoolean(false);
 * // => false
 *
 * toBoolean('yes');
 * // => true
 *
 * toBoolean(1);
 * // => true
 *
 * toBoolean('y');
 * // => true
 */
function toBoolean(value) {
  if (value === true || value === false) {
    return value;
  }

  if (typeof value === 'string') {
    value = value.toLowerCase();
  }

  if ([0, 'false', '0', 'f', 'n', 'no', 'nao', 'off'].indexOf(value) !== -1) {
    return false;
  }

  if ([1, 'true', 't', 'y', 's', 'yes', 'sim', 'on'].indexOf(value) !== -1) {
    return true;
  }

  return null;
}

module.exports = toBoolean;
