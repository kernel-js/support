/*----------------------------------------------
 *                    Lodash
 *---------------------------------------------- */
const camelCase = require('lodash/camelCase');
const capitalize = require('lodash/capitalize');
const find = require('lodash/find');
const floor = require('lodash/floor');
const get = require('lodash/get');
const has = require('lodash/has');
const hasIn = require('lodash/hasIn');
const head = require('lodash/head');
const keysIn = require('lodash/keysIn');
const last = require('lodash/last');
const set = require('lodash/set');
const snakeCase = require('lodash/snakeCase');
const startCase = require('lodash/startCase');
const map = require('lodash/map');
const mapValues = require('lodash/mapValues');
const omitBy = require('lodash/omitBy');

/*----------------------------------------------
 *                    Kernel
 *---------------------------------------------- */
const env = require('./env');
const collect = require('./collect');
const isArray = require('./isArray');
const isObject = require('./isObject');
const isEmpty = require('./isEmpty');
const isNotEmpty = require('./isNotEmpty');
const toBoolean = require('./toBoolean');
const removeEmpty = require('./removeEmpty');
const mapEmptyToNull = require('./mapEmptyToNull');

export {
  camelCase,
  capitalize,
  find,
  floor,
  get,
  has,
  hasIn,
  head,
  keysIn,
  last,
  set,
  snakeCase,
  startCase,
  map,
  mapValues,
  omitBy,

  env,
  collect,
  isArray,
  isObject,
  isEmpty,
  isNotEmpty,
  toBoolean,
  removeEmpty,
  mapEmptyToNull,
}
