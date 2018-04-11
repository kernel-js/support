import {isObject, mapValues, isEmpty} from "./index";

/**
 * If value isEmpty then change to null
 *
 * @param   {object} value
 * @returns {*}
 */
const mapEmptyToNull = (value) => {
  if (!isObject(value)) {
    return value;
  }

  return mapValues(value, function(v) {
    return isEmpty(v) ? null : v;
  });
}

export default mapEmptyToNull;
