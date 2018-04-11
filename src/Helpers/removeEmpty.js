import {isObject, omitBy, isEmpty} from "./index";

/**
 * Remove empty values from object
 *
 * @param   {object} value
 * @returns {*}
 */
const removeEmpty = (value) => {
  if (!isObject(value)) {
    return value;
  }

  return omitBy(value, isEmpty);
}

export default removeEmpty;
