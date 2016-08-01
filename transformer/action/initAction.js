'use strict';



class InitAction{
    constructor(){
        this.name = 'init';
        this.help = '欢迎:\n1-数字转条码\n2-条码转数字\nq-退出';
    }
    doAction(cmd){
        switch (cmd){
            case '1':
                return 'numberToBarcode';
            case '2':
                return 'barcodeToNumber';
            case 'q':
                // replServer.close();
                process.exit(0);
                return;
            default:
                console.log("无效的输入");
                return 'init'
        }
    }
}

module.exports = InitAction;