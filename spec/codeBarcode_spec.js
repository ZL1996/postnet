/**
 * Created by lambo on 8/1/16.
 */
'use strict';

const func1 = require('../barcodeToCode');
const func2 = require('../codeToBarcode');


describe('barcodeToCode test',function () {
    it('result is ',function () {
        let origin = '| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |';
        expect(new func1().changeBarcodeToCode(origin)).toEqual('45056-1234');
    })
    it('result is ',function () {
        let origin = '| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||:::|'
        expect(new func1().changeBarcodeToCode(origin)).toEqual(false);
    })
    it('result is ',function () {
        let origin = '| **::a |'
        expect(new func1().changeBarcodeToCode(origin)).toEqual(false);
    })
})

describe('codeToBarcode test',function () {
    it('result is ',function () {
        let origin = '45056-1234';
        expect(new func2().changCodeToBarcode(origin)).toEqual('| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |')
    })
    it('result is ',function () {
        let origin = '4505621234';
        expect(new func2().changCodeToBarcode(origin)).toEqual(false);
    })
    it('result is ',function () {
        let origin = '4567a';
        expect(new func2().changCodeToBarcode(origin)).toEqual(false);
    })
})