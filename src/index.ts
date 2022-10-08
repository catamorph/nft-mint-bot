const ethers = require('ethers');
import { WALLETS } from './config/config';
import getContract from './controller/contract';
import createWorkerAndMintNft from './controller/worker';

// Get contract instance
const contract = getContract();
// Listen for Initialized event
contract.on('Initialized', (event: any) => {
  console.log('event', event.toNumber());
  const mintStartTime = event.toNumber();

  WALLETS.forEach((wallet: string) => createWorkerAndMintNft(wallet, mintStartTime));
});
