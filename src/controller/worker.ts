import { Worker } from 'worker_threads';
import * as events from 'events';
import getContract from './contract';
import getSigner from './signer';
const eventEmitter = new events.EventEmitter();

export const createWorkerAndMintNftOnEvent = (privateKey: string) => {
  // Create worker thread
  const worker = new Worker('./src/controller/workerPath.js', {
    workerData: {
      path: 'worker.ts',
    },
  });

  // get signer instance
  const signer = getSigner(privateKey);

  // get contract instancex
  const contract = getContract(signer);

  // handle message from Initialized event
  eventEmitter.on('mint', (mintStartTime: number) => {
    // mint nft at starttime
    setTimeout(mint, mintStartTime, contract);
    worker.terminate();
  });
};

export const handleEvent = (mintStartTime: number) => {
  // tell workers to mint nft
  eventEmitter.emit('mint', mintStartTime);
};
