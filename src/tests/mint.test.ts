import getContract from '../controller/contract';
import mint from '../controller/mint';
import getSigner from '../controller/signer';
import { privateKeyMock } from './mocks/mocks';

jest.mock('ethers');

test('Mint a nft', () => {
  const signer = getSigner(privateKeyMock);
  const contract = getContract(signer);
  expect(mint(contract)).toBe(void 0);
});
