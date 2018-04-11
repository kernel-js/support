import isEmpty from "./isEmpty";

/**
 * Check if value is not empty using isEmpty function
 *
 * @param   {*} value
 * @returns {boolean}
 */
function isNotEmpty(value)
{
  return !isEmpty(value);
}

module.exports = isNotEmpty;
