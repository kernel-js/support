import {get} from "./index";

/**
 * Gets the value of an environment variable.
 *
 * @param   {String}  key
 * @param   {*}       defaultValue
 * @returns {*}
 */
const env = (key, defaultValue = null) => {
  if (typeof process === 'undefined' || typeof process.env === 'undefined') {
    return defaultValue;
  }

  return get(process.env, key, defaultValue);
}

export default env;
