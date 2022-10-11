import getProvider from './provider';

import * as ethers from 'ethers';

const getSigner = (privateKey: string) => {
  const provider = getProvider();
  return new ethers.Wallet(privateKey, provider);
};
export default getSigner;
