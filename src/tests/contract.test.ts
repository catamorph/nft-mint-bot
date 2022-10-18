import { ethers } from 'ethers';
import { CONTRACT_ADDRESS } from '../config/config';
import getContract from '../controller/contract';
import getSigner from '../controller/signer';
import { privateKeyMock } from './mocks/mocks';
import * as Artifact from '../abi/FactoryNFT.json';
import getProvider from '../controller/provider';
jest.mock('ethers');

describe('Get contract instance', () => {
  it('Returns a contract instance when providing a singer', () => {
    const singer = getSigner(privateKeyMock);
    expect(getContract(singer)).toBeInstanceOf(ethers.Contract);
    expect(ethers.Contract).toBeCalledWith(CONTRACT_ADDRESS, Artifact.abi, singer);
  });

  it('Returns a contract instance when providing a provider', () => {
    const provider = getProvider();
    expect(getContract(provider)).toBeInstanceOf(ethers.Contract);
    expect(ethers.Contract).toBeCalledWith(CONTRACT_ADDRESS, Artifact.abi, provider);
  });
});
