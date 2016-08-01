'use strict';

const repl = require('repl');

const InitAction = require('./transformer/action/initAction')
const BarcodeToNumberAction = require('./transformer/action/barcodeToNumberAction');
const NumberToBarcodeAction = require('./transformer/action/numberToBarcodeAction');
const ContinueNumberToBarcodeAction = require('./transformer/action/continueNumberToBarcodeAction');
const ContinueBarcodeToNumberAction = require('./transformer/action/continueBarcodeToNumberAction');

const actions = [new InitAction(), 
new BarcodeToNumberAction(),
new NumberToBarcodeAction(),
new ContinueNumberToBarcodeAction(),
new ContinueBarcodeToNumberAction()
];

function switchRouter(context, done) {
  let router = actions.find(item => item.name === currentAction);
  let result = router.doAction(context.cmd);
  let newRouter = actions.find(item => item.name === result);

  currentAction = newRouter.name;
  console.log(newRouter.help);
  done(null);
}

function handleCmd(cmd, context, filename, done) {
  switchRouter({
    cmd: cmd.trim()
  }, done);
  done(null);
}

var replServer = repl.start({prompt: "> ", eval: handleCmd});



let currentAction = 'init';
console.log(actions.find(item => item.name === currentAction).help);


