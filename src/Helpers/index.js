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
const unset = require('lodash/unset');

/*----------------------------------------------
 *                    Kernel
 *---------------------------------------------- */
import env from './env';
import collect from './collect';
import isArray from './isArray';
import isObject from './isObject';
import isEmpty from './isEmpty';
import isNotEmpty from './isNotEmpty';
import toBoolean from './toBoolean';
import removeEmpty from './removeEmpty';
import mapEmptyToNull from './mapEmptyToNull';

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
  unset,

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
