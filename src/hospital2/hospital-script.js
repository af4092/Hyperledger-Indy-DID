// hospital-script.js

const { IndyWallet, IndyGateway } = require('indy-sdk');
const path = require('path');

async function main() {
  const poolName = 'poolName'; // Replace with the actual pool name
  const walletPath = path.resolve(__dirname, '..', 'wallet');

  const walletConfig = {
    id: 'walletId', // Replace with the actual wallet ID
    storage_config: {
      path: walletPath,
    },
  };

  const walletCredentials = {
    key: 'walletKey', // Replace with the actual wallet key
  };

  const wallet = new IndyWallet(walletConfig, walletCredentials);

  const gateway = new IndyGateway();
  await gateway.connect(poolName, wallet, {
    discovery: { enabled: true, asLocalhost: true },
  });

  const network = await gateway.getNetwork('mychannel');
  const contract = network.getContract('hospital-chaincode2');

  // Invoke chaincode functions here
  async function main(){
    const contract = network.getContract('hospital-script');
    const result = await contract.submitTransaction('functinName', 'arg1', 'arg2');
    console.log('Transaction submitted: ', result.toString());
  }
}

main().then(() => {
  console.log('Script completed successfully');
}).catch((error) => {
  console.error(`Script execution failed: ${error}`);
  process.exit(1);
});
