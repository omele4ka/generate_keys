const bitcoin = require('bitcoinjs-lib');
const ecc = require('tiny-secp256k1');
const { ECPairFactory } = require('ecpair');

const ECPair = ECPairFactory(ecc);
const testnet = bitcoin.networks.testnet;

const aliceKeys = ECPair.makeRandom({ network: testnet });
const alicePublic = bitcoin.payments.p2wpkh({
    pubkey: aliceKeys.publicKey,
    network: testnet
});

const alicePrivate = aliceKeys.toWIF();


console.log('Public key: ' + alicePublic.address);
console.log('Private key: ' + alicePrivate);