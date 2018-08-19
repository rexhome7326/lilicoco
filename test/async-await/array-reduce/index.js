import { expect } from 'chai';
import {
  main
} from '../../../src/async-await/array-reduce';

describe('async-await unit test; ', function() {
  it( `success get result from array reduce and result[1] === pow(list[1], 2)`, function() {
    const list = [1, 2, 3];
    const promise = main(list);
    
    return promise.then((result) => {
      expect( result ).to.be.an('array');
      expect( result[1] ).to.equal( Math.pow(list[1], 2));
    });
  });
});
