const mint = async (contract) => {
  try {
    await contract.mint({
      maxFeePerGas: 300,
      maxPriorityFeePerGas: 50,
      gasLimit: 300000,
    });
  } catch (error) {
    console.log('error', error);
  }
};
