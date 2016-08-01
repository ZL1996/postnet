'use strict';
class NumberToBarcodeAction{
    constructor(){
        this.name = 'numberToBarcode';
        this.help = '=====数字转条码=====: \n 1 - 输入并开始转换   输入数字以转为条码,如(45056-1233) \n q - 返回主界面';
    }

    doAction(cmd) {
    switch(cmd) {
        case '1':
            return 'continueNumberToBarcode';
        case 'q':
            return 'init';      
        default:
            console.log("无效的输入");
            return 'init'
    }
}
}
module.exports = NumberToBarcodeAction;