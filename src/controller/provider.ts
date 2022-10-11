import { NODE_URL } from '../config/config';

import * as ethers from 'ethers';
import * as dotenv from 'dotenv';
dotenv.config();

const getProvider = () => {
  console.log('NODE_URL ', NODE_URL);
  const HTTPSProvider = new ethers.providers.JsonRpcProvider(
    'https://billowing-billowing-ensemble.avalanche-testnet.discover.quiknode.pro/c1508414d68598e6ff7250fe10b52baf3547a650/ext/bc/C/rpc',
  );
  HTTPSProvider.getBlockNumber().then((result: number) => {
    console.log('Current block number: ' + result);
  });
  return HTTPSProvider;
};
export default getProvider;
