import { ethers } from 'ethers';
import getSigner from '../controller/signer';
import { privateKeyMock } from './mocks/mocks';

jest.mock('ethers');

test('Get signer', () => {
  expect(getSigner(privateKeyMock)).toBeInstanceOf(ethers.Wallet);
  expect(ethers.Wallet).toBeCalledTimes(1);
});
