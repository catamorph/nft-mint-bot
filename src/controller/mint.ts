import { ethers } from "ethers";

const mint = (contract: ethers.Contract) => {
    try {
        contract.allowlistMint(1, {
            maxFeePerGas: ethers.utils.parseUnits("300", "gwei"),
            maxPriorityFeePerGas: ethers.utils.parseUnits("50", "gwei"),
            gasLimit: 3000000
        } )
    } catch (error) {
        console.log('error', error)
    }
}
export default mint