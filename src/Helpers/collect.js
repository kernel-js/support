/**
 * Create a collection from the given value.
 *
 * @param   {*} value
 * @returns Collection
 */
function collect(value = []) {
  return new (require('../Collection/Collection'))(value);
}

module.exports = collect;
