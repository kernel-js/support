import { expect } from 'chai';
import { Collection } from '../src/index';

describe('Collection', () => {
  it('hasIn', () => {
    let collect = new Collection({'a': {'b': 'b value'}});
    expect(collect.hasIn('a')).to.equal(true);
    expect(collect.hasIn('a.b')).to.equal(true);
    expect(collect.hasIn('a.b.c')).to.equal(false);
  });

  it('getIn', () => {
    let collect = new Collection({'a': {'b': 'b value'}});
    expect(collect.getIn('a.b')).to.equal('b value');
    expect(collect.getIn('a.b.c')).to.equal(null);
    expect(collect.getIn('a.b.c', 'default value')).to.equal('default value');
  });

  it('setIn', () => {
    let collect = new Collection({'a': {'b': 'b value'}});
    expect(collect.getIn('a.b.c')).to.equal(null);
    collect.putIn('a.b.c', 'c value');
    expect(collect.getIn('a.b.c')).to.equal('c value');
  });
});
