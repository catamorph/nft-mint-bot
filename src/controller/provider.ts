import * as ethers from 'ethers';
import { NODE_URL } from '../config/config';

const getProvider = () => {
  return new ethers.providers.JsonRpcProvider(NODE_URL);
};
export default getProvider;
