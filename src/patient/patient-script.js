// patient-script.js

const { FileSystemWallet, Gateway } = require('indy-network');
const path = require('path');

async function main() {
  const ccpPath = path.resolve(__dirname, '..', 'connection.json');
  const walletPath = path.resolve(__dirname, '..', 'wallet');

  const wallet = new FileSystemWallet(walletPath);

  const gateway = new Gateway();
  await gateway.connect(ccpPath, {
    wallet,
    identity: 'patient',
    discovery: { enabled: true, asLocalhost: true },
  });

  const network = await gateway.getNetwork('mychannel');
  const contract = network.getContract('patient-chaincode');

  // Invoke chaincode functions here
}

main().then(() => {
  console.log('Script completed successfully');
}).catch((error) => {
  console.error(`Script execution failed: ${error}`);
  process.exit(1);
});
