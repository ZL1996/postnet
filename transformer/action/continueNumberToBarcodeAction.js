'use strict';
const func1 = require('../../codeToBarcode');
let func = new func1();

class ContinueNumberToBarcodeAction{
    constructor(){
        this.name = 'continueNumberToBarcode';
        this.help = '******请输入数字******:';
    }
    doAction(cmd) {
    let result = func.changCodeToBarcode(cmd);
    if(!result){
        result = '\nError! 您的输入格式有误(5位,9位或10位:XXXXX-XXXX数字构成)\n';
    }
    console.log(result);
    return 'numberToBarcode';
}
}

module.exports = ContinueNumberToBarcodeAction;