import { ethers } from "ethers"
import getProvider from "./provider"

 const getSigner = (privateKey: string) => {
    const provider = getProvider()
    return new ethers.Wallet(privateKey, provider)
}
export default getSigner;
