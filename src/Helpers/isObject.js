/**
 * Check if value is of object type.
 *
 * @param   {*} value
 * @returns {boolean}
 */
const isObject = (value) => {
  return (
    typeof value === 'object' &&
    Object.prototype.toString.call(value) === '[object Object]'
  )
}

export default isObject;
