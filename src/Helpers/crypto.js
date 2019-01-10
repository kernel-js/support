/* eslint node/no-deprecated-api: 0 */

const Crypto = require('crypto-browserify');

/**
 * 
 * @param {*} data 
 * @param {*} key 
 * @param {*} algorithm 
 */
const createHmac = (data, key, algorithm = 'md5') => {
  let hmac = Crypto.createHmac(algorithm, key);
  hmac.update(data);
  return hmac.digest('hex');
}

/**
 * 
 * @param {*} data 
 * @param {*} password 
 */
const encrypt = (data, password) => {
  password = Crypto.createHash('md5').update(password).digest('hex');
  const iv = Crypto.randomBytes(16);
  const key = new Buffer.from(password);
  const plain = new Buffer.from(data);
  const cipher = Crypto.createCipheriv('aes-256-cbc', key, iv);
  
  let encrypted = cipher.update(plain);
  encrypted = Buffer.concat([encrypted, cipher.final()]);

  return iv.toString('hex') + ':' + encrypted.toString('hex')

}

/**
 * 
 * @param {*} data 
 * @param {*} password 
 */
const decrypt = (data, password) => {
  password = Crypto.createHash('md5').update(password).digest('hex');
  let textParts = data.split(':');
  let iv = new Buffer(textParts.shift(), 'hex');
  let encryptedText = new Buffer(textParts.join(':'), 'hex');
  let decipher = Crypto.createDecipheriv('aes-256-cbc', new Buffer(password), iv);
  let decrypted = decipher.update(encryptedText);

  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString();

}

/**
 * 
 * @param {*} data 
 * @param {*} password 
 * @param {*} hmac 
 */
const encryptWithHmac = (data, password, hmac) => {
  password = Crypto.createHash('md5').update(password).digest('hex');
  const iv = Crypto.randomBytes(16).toString('hex').substr(0, 16)
  let encryptor = Crypto.createCipheriv('aes-256-cbc', password, iv)
  let encrypted = Buffer.from(iv).toString('base64') + encryptor.update(data, 'utf8', 'base64') + encryptor.final('base64')

  hmac.value = createHmac(encrypted, password)

  return encrypted;
}

/**
 * 
 * @param {*} data 
 * @param {*} password 
 * @param {*} hmac 
 */
const decryptWithHmac = (data, password, hmac) => {
  password = Crypto.createHash('md5').update(password).digest('hex');
  
  if (createHmac(data, password) !== hmac.value) {
    return 'Encrypted has been tampered with...'
  }

  const iv = Buffer.from(data.substr(0, 24), 'base64').toString();
  let decryptor = Crypto.createDecipheriv('aes-256-cbc', password, iv);

  return decryptor.update(data.substr(24), 'base64', 'utf8') + decryptor.final('utf8');
}

/**
 * 
 * @param {*} data 
 * @param {*} password 
 * @param {*} hmac 
 */
const encryptWithTSValidation = (data, password, hmac) => {
  let dataTS = new Date().toISOString().substr(0, 19) + data;
  return encryptWithHmac(dataTS, password, hmac);
}

/**
 * 
 * @param {*} data 
 * @param {*} password 
 * @param {*} hmac 
 * @param {*} intervalThreshold 
 */
const decryptWithTSValidation = (data, password, hmac, intervalThreshold = 43200) => {
  let decrypted = decryptWithHmac(data, password, hmac);
  let now = new Date();
  let year = parseInt(decrypted.substr(0, 4)), month = parseInt(decrypted.substr(5, 2)) - 1,
    day = parseInt(decrypted.substr(8, 2)), hour = parseInt(decrypted.substr(11, 2)),
    minute = parseInt(decrypted.substr(14, 2)), second = parseInt(decrypted.substr(17, 2));
  let msgDate = new Date(Date.UTC(year, month, day, hour, minute, second));

  if (Math.round((now - msgDate) / 1000) <= intervalThreshold) {
    return decrypted.substr(19);
  }
}

export {
  encrypt,
  decrypt,
  encryptWithHmac,
  decryptWithHmac,
  encryptWithTSValidation,
  decryptWithTSValidation,
} 
