/**
 * Check if value is of array type.
 *
 * @param   {*} value
 * @returns {boolean}
 */
const isArray = (value) => {
  return (
    Array.isArray(value) === true &&
    Object.prototype.toString.call(value) === '[object Array]'
  );
}

export default isArray;
