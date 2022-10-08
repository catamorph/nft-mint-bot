const ethers = require('ethers');
import Artifact from '../artifacts/contracts/FactoryNFT.sol/FactoryNFT.json';
import getProvider from './provider';
const getContract = () => {
  const provider = getProvider();

  return new ethers.Contract(process.env.CONTRACT_ADDRESS!, Artifact.abi, provider);
};
export default getContract;
