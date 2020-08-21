const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('05541f2a220ff55d25e0e192c333c431cde14dbff5639c56a04ff62c760ba4b7');
const myWalletAddress = myKey.getPublic('hex');

let f25Coin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key', 10);
tx1.signTransaction(myKey);
f25Coin.addTransaction(tx1);


console.log('\nStarting the miner...');
f25Coin.minePendingTransactions(myWalletAddress);
console.log('\nBalance of xavier is ', f25Coin.getBalanceOfAddress(myWalletAddress));
console.log(f25Coin.chain[0])
console.log(f25Coin.chain[1])

//f25Coin.chain[1].transactions[0].amount = 1;

console.log("Is chain valid?", f25Coin.isChainValid());