import { ethers } from 'ethers';
import { NODE_URL } from '../config/config';
import getProvider from '../controller/provider';

jest.mock('ethers');

test('Get provider', () => {
  expect(getProvider()).toBeInstanceOf(ethers.providers.JsonRpcProvider);
  expect(ethers.providers.JsonRpcProvider).toBeCalledTimes(1);
  expect(ethers.providers.JsonRpcProvider).toBeCalledWith(NODE_URL);
});
