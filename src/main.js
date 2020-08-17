const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('fe75013731db9b67f95c88735f2dbb44ec27b69f2b24dcc06d99b4902947e207');
const myWalletAddress = myKey.getPublic('hex');

let f25Coin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key', 10);
tx1.signTransaction(myKey);
f25Coin.addTransaction(tx1);


console.log('\nStarting the miner...');
f25Coin.minePendingTransactions(myWalletAddress);
console.log('\nBalance of xavier is ', f25Coin.getBalanceOfAddress(myWalletAddress));

// f25Coin.chain[1].transactions[0].amount = 1;

console.log("Is chain valid?", f25Coin.isChainValid());