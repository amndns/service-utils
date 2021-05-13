import { isDefined, toArray, toBool, toNumber } from '../../../src/ts';

describe('ts/utils', () => {
  describe('isDefined', () => {
    it('Should return true when the value is defined', (done) => {
      const value = '';
      expect(isDefined(value)).toBeTruthy();
      done();
    });

    it('Should return true even when the value is falsy', (done) => {
      const value = false;
      expect(isDefined(value)).toBeTruthy();
      done();
    });

    it('Should return true when the value is null or not defined', (done) => {
      const valueOne = null;
      let valueTwo: string;
      expect(isDefined(valueOne)).toBeFalsy();
      expect(isDefined(valueTwo)).toBeFalsy();
      done();
    });
  });

  describe('toNumber', () => {
    it('Should return the int version of a numeric string', (done) => {
      const value = '123';
      expect(toNumber(value)).toStrictEqual(123);
      done();
    });
  });

  describe('toBool', () => {
    it('Should return the boolean version of a boolean string', (done) => {
      const value = 'true';
      expect(toBool(value)).toStrictEqual(true);
      done();
    });
  });

  describe('toArray', () => {
    it('Should return a single-element array when the value is not an array', (done) => {
      const valueOne = '123';
      const valueTwo = 123;
      expect(toArray(valueOne)).toStrictEqual([valueOne]);
      expect(toArray(valueTwo)).toStrictEqual([valueTwo]);
      done();
    });

    it('Should return the array when the value is an array', (done) => {
      const valueOne = ['123'];
      const valueTwo = [123];
      expect(toArray(valueOne)).toStrictEqual(valueOne);
      expect(toArray(valueTwo)).toStrictEqual(valueTwo);
      done();
    });
  });
});
