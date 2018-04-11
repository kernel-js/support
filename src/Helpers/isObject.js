/**
 * Check if value is of object type.
 *
 * @param   {*} value
 * @returns {boolean}
 */
function isObject(value)
{
  return (
    typeof value === 'object' &&
    Object.prototype.toString.call(value) === '[object Object]'
  )
}

module.exports = isObject;
