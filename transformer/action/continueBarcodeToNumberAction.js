/**
 * Created by lambo on 8/1/16.
 */
'use strict';

const func1 = require('../../barcodeToCode');
let func = new func1();

class ContinueBarcodeToNumberAction{
    constructor(){
        this.name = 'continueBarcodeToNumber';
        this.help = '******请输入条码******';
    }

    doAction(cmd) {
    let result = func.changeBarcodeToCode(cmd);
    if(!result){
        result = '\nError! 您的输入有误\n';
    }
    console.log(result);
    return 'barcodeToNumber';
}
}



module.exports = ContinueBarcodeToNumberAction;