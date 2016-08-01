/**
 * Created by lambo on 8/1/16.
 */
'use strict';

const init = require('../transformer/action/initAction');
const numberToBarcode = require('../transformer/action/numberToBarcodeAction');
const barcodeToNumber = require('../transformer/action/barcodeToNumberAction');

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
    
});
