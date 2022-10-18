import getContract from './controller/contract';
import getProvider from './controller/provider';
import { PRIVATE_KEYS } from './config/config';

import { createWorkerAndMintNftOnEvent, handleEvent } from './controller/worker';
import { BigNumber } from 'ethers';

// create one worker for each wallet
PRIVATE_KEYS.forEach((privateKey: string) => {
  createWorkerAndMintNftOnEvent(privateKey);
});

// get provider instance
const provider = getProvider();

// get contract instance
const contract = getContract(provider);

// Listen for the Initialized event
contract.on(
  'Initialized',
  async (
    preMintStartTime: BigNumber,
    allowlistStartTime: BigNumber,
    publicSaleStartTime: BigNumber,
    publicSaleEndTime: BigNumber,
    allowlistPrice: BigNumber,
    salePrice: BigNumber,
  ) => {
    // Get the minting start time
    const mintStartTime = allowlistStartTime.toNumber();
    console.log('Initialized', mintStartTime);
    // send the mintStartTime to event handler
    handleEvent(mintStartTime);
  },
);
