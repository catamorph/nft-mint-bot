import { BigNumber } from 'ethers';

export interface InitializedEvent {
  preMintStartTime: BigNumber;
  allowlistStartTime: BigNumber;
  publicSaleStartTime: BigNumber;
  publicSaleEndTime: BigNumber;
  allowlistPrice: BigNumber;
  salePrice: BigNumber;
}
