import {isObject, mapValues, isEmpty} from "./index";

/**
 * If value isEmpty then change to null
 *
 * @param   {object} value
 * @returns {*}
 */
function mapEmptyToNull(value)
{
  if (!isObject(value)) {
    return value;
  }

  return mapValues(value, function(v) {
    return isEmpty(v) ? null : v;
  });
}

module.exports = mapEmptyToNull;
