const ethers = require("ethers");
const dotenv = require("dotenv");
dotenv.config();

const getProvider = () => {
  const HTTPSProvider = new ethers.providers.JsonRpcProvider(
    process.env.NODE_URL
  );
  return HTTPSProvider;
};
export default getProvider;
