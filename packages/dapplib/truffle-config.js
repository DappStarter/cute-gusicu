require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom produce bone food jar rifle pitch huge coral light army gentle'; 
let testAccounts = [
"0xfbbd47e8f4e95282fee75881c3e96f46978cab9adfea19c7235353d35bdfc361",
"0xe4542db35599a5bedaae65f655aff65ef37f74b9453fa5889ca90a5c700a70f7",
"0x90892a7be689b55bd8f4471afe0e42ccf970b2f1c082a60e8cf04b00912d6cb8",
"0xf6eed3d6eeff9e2bf735e1b27354a478986c9c27aa81f2c46d0b928b61b6c152",
"0x7a2dc6f0e28e82adee57396846a0c2121c6a8aec8b295f60947d55da04ee6a09",
"0x55960791e0509ea5b59a7d27b3aca1c21ecd49705a47bf233558df9c3dcbdf12",
"0xcaf312d3f1225037732d5984df3dd5d50573361a83145eaab615cd00796d2ca4",
"0xa49394c5181549b04eb632c9a242bc912e5c6e1b312199d8d18e508cf4b1fd88",
"0x9aafdfaa3d19eebd9b5b408fd4f46d43fe1480bb54ded589b56e382849b14967",
"0x8a98ec9a8fe53057ba2383fef3c1b97699c1e3de38ead66040a36dc72134a496"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

