/**
 * Create a collection from the given value.
 *
 * @param   {*} value
 * @returns Collection
 */
const collect = (value = []) => {
  return new (require('../Collection/Collection'))(value);
}

export default collect;
