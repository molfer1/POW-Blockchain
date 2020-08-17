const { Blockchain, Transaction } = require('./blockchain');

let f25Coin = new Blockchain();
f25Coin.createTransaction(new Transaction('address1', 'address2', 100));
f25Coin.createTransaction(new Transaction('address2', 'address1', 50));

console.log('\nStarting the miner');
f25Coin.minePendingTransactions('xavier');
console.log('\nBalance of xavier is ', f25Coin.getBalanceOfAddress('xavier'));

console.log('\nStarting the miner again');
f25Coin.minePendingTransactions('xavier');

console.log('\nBalance of xavier is ', f25Coin.getBalanceOfAddress('xavier'));