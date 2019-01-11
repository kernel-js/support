import { expect } from 'chai';
import {
  isEmpty,
  removeEmpty,
  mapEmptyToNull,
  encrypt,
  decrypt,
  encryptWithHmac,
  decryptWithHmac,
  encryptWithTSValidation,
  decryptWithTSValidation,
} from '../src/Helpers/index';

describe('Helpers', () => {

  it('isEmpty', () => {
    expect(isEmpty()).to.equal(true);
    expect(isEmpty(undefined)).to.equal(true);
    expect(isEmpty(NaN)).to.equal(true);
    expect(isEmpty(Error)).to.equal(false);

    expect(isEmpty({})).to.equal(true);
    expect(isEmpty({0:0})).to.equal(false);
    expect(isEmpty([])).to.equal(true);
    expect(isEmpty([0])).to.equal(false);

    expect(isEmpty('string')).to.equal(false);
    expect(isEmpty(' ')).to.equal(true);

    expect(isEmpty(0)).to.equal(false);
    expect(isEmpty(1)).to.equal(false);

    expect(isEmpty(true)).to.equal(false);
    expect(isEmpty(false)).to.equal(false);

    expect(isEmpty(() => {})).to.equal(false);
    expect(isEmpty(new Date())).to.equal(false);
  });

  it('removeEmpty', () => {
    let obj = {'a': ' ', 'b': 'value', 'c': null};
    expect(JSON.stringify(removeEmpty(obj))).to.equal('{"b":"value"}');
  });

  it('mapEmptyToNull', () => {
    expect(JSON.stringify(mapEmptyToNull({}))).to.equal('{}');
    expect(JSON.stringify(mapEmptyToNull({'a': 'value', 'b': ''})))
      .to.equal('{"a":"value","b":null}');
  });

  it('encrypt', () => {
    let data = 'kernel-js', key = '82ed4765d8fe4c41de2491d32125b019';
    let encrypted = encrypt(data, key);

    expect(decrypt(encrypted, key)).to.equal(data);
  });

  it('encryptWithHmac', () => {
    let data = 'kernel-js', key = '82ed4765d8fe4c41de2491d32125b019', hmac = {};
    let encrypted = encryptWithHmac(data, key, hmac);

    expect(decryptWithHmac(encrypted, key, hmac)).to.equal(data);
  });

  it('encryptWithTSValidation', () => {
    let data = 'kernel-js', key = '82ed4765d8fe4c41de2491d32125b019', hmac = {};
    let encrypted = encryptWithTSValidation(data, key, hmac);

    expect(decryptWithTSValidation(encrypted, key, hmac)).to.equal(data);
  });

});
