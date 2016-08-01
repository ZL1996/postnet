/**
 * Created by lambo on 8/1/16.
 */
'use strict';

const init = require('../transformer/action/initAction');
const numberToBarcode = require('../transformer/action/numberToBarcodeAction');
const barcodeToNumber = require('../transformer/action/barcodeToNumberAction');
const continueBarcodeToNumber = require('../transformer/action/continueBarcodeToNumberAction');
const continueNumberToBarcode = require('../transformer/action/continueNumberToBarcodeAction');

describe('initAction test',function () {
   it('show..',function () {
       let cmd = '1';
       expect(new init().doAction(cmd)).toEqual('numberToBarcode');
   });
   it('show..',function () {
       let cmd = '2';
       expect(new init().doAction(cmd)).toEqual('barcodeToNumber');
   });
   it('show..',function () {
       let cmd = '3';
       expect(new init().doAction(cmd)).toEqual('init');
   });
});

describe('numberToBarcodeAction test',function () {
    it('show..',function () {
        let cmd = '1';
        expect(new numberToBarcode().doAction(cmd)).toEqual('continueNumberToBarcode');
    });
    it('show..',function () {
        let cmd = '3';
        expect(new numberToBarcode().doAction(cmd)).toEqual('init');
    });
})

describe('barcodeToNumberAction test',function () {
    it('show..',function () {
        let cmd = '1';
        expect(new barcodeToNumber().doAction(cmd)).toEqual('continueBarcodeToNumber');
    })
    it('show..',function () {
        let cmd = 'q';
        expect(new barcodeToNumber().doAction(cmd)).toEqual('init');
    })
    it('show..',function () {
        let cmd = '4';
        expect(new barcodeToNumber().doAction(cmd)).toEqual('init');
    })
});

describe('continueBarcodeToNumberAction test',function () {
    it('show..',function () {
        let cmd = '| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |';
        expect(new continueBarcodeToNumber().doAction(cmd)).toEqual('barcodeToNumber');
    })
    it('show..',function () {
        let cmd = '| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|';
        expect(new continueBarcodeToNumber().doAction(cmd)).toEqual('barcodeToNumber');
    })
});

describe('continueNumberToBarcodeAction test',function () {
    it('show..',function () {
        let cmd = '45056-1234';
        expect(new continueNumberToBarcode().doAction(cmd)).toEqual('numberToBarcode');
    })
    it('show..',function () {
        let cmd = '450a4';
        expect(new continueNumberToBarcode().doAction(cmd)).toEqual('numberToBarcode');
    })
})
