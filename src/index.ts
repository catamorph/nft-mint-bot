const ethers = require("ethers");
import { WALLETS } from "./config/config";
import getContract from "./controller/contract";

// Get contract instance
const contract = getContract();
// Listen for Initialized event
contract.on("Initialized", (event: any) => {
  console.log("event", event.toNumber());

  WALLETS.forEach((wallet) => createWorker());
});
