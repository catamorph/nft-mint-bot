import * as ethers from 'ethers';
import * as Artifact from '../abi/FlatLaunchpeg.json';
import { CONTRACT_ADDRESS } from '../config/config';

const getContract = (signerOrProvider: ethers.Signer | ethers.ethers.providers.JsonRpcProvider) => {
  return new ethers.Contract(CONTRACT_ADDRESS, Artifact.abi, signerOrProvider);
};
export default getContract;
