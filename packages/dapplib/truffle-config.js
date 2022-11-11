require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include enroll sure tribe story raise machine erosion injury light army giant'; 
let testAccounts = [
"0xfc378227aa43d346efba5b2e11e9d9debe39d408d85856860e2b6d0edc4c5eb1",
"0x7418d46fb554afae27c8d626e9d90dc6e0ff2f1b845e017b49f383cd7c12aba4",
"0x8b4d831dce544421ade7f291a84ebc48ec36238ce42e2ae499668d03951c1204",
"0x381f9e44456c070e533776bdf627bb045bc4f1684ff7eba838161ae0824235d0",
"0x70a78afef0f3dfeb0302b066a0d62fe5b2aa1f92fb3afdaeba6ed222088f9c4a",
"0xca7f67f7033e99f3b7a9daca597abc647e4070e1224e5fecfbf61a75b8bc16b6",
"0x8b81fc9d6e521d84648b217d1d5a3cadbe715988d9ef8b478bbd4218ab120d61",
"0xa69ea48835c913e2c50e2d339ba1560c3ee350ad8cb38cc63f96b2e037594e82",
"0x95a0ccb47920db64d743ea8ab62244d166cc79cda487882656bc71123525567b",
"0xc4d56913c1d6183325b0f402926a4d4685b6bd9b6d691f092875673c00259623"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


