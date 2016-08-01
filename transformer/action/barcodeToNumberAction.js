'use strict';
class BarcdeToNumberActions{
    constructor(){
        this.name = 'barcodeToNumber';
        this.help = '======条码转数字====== \n 1 - 输入并开始转换 \n q - 返回主界面';
    }

    doAction(cmd) {
    switch(cmd) {
        case '1':
            return 'continueBarcodeToNumber';
        case 'q':
            return 'init';
        default:
            console.log("无效的输入");
            return 'init'
    }
}
}

module.exports = BarcdeToNumberActions;