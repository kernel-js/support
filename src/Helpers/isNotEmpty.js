import isEmpty from "./isEmpty";

/**
 * Check if value is not empty using isEmpty function
 *
 * @param   {*} value
 * @returns {boolean}
 */
const isNotEmpty = (value) => {
  return !isEmpty(value);
}

export default isNotEmpty;
