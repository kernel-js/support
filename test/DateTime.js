import { expect } from 'chai';
import { DateTime } from '../src/index';

describe('DateTime', () => {
  it('instance of', () => {
    expect(DateTime.local()).to.be.an.instanceof(DateTime);
  });
});
