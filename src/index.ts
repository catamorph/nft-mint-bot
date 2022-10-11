import { PRIVATE_KEYS } from './config/config';
import getContract from './controller/contract';
import getProvider from './controller/provider';
import { createWorkerAndMintNftOnEvent, handleEvent } from './controller/worker';

// create one worker for each wallet
PRIVATE_KEYS.forEach((privateKey: string) => {
  createWorkerAndMintNftOnEvent(privateKey);
});

// get provider instance
const provider = getProvider();

// get contract instance
const contract = getContract(provider);

// Listen for the Initialized event
contract.on('Initialized', async (event: any) => {
  // Get the minting start time
  const mintStartTime = event.toNumber();
  console.log('Initialized', mintStartTime);
  handleEvent(mintStartTime);
});
