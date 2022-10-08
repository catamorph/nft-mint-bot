import dotenv from "dotenv";
dotenv.config();
export const WALLETS = [
  process.env.FIRST_PRIVATE_KEY,
  process.env.SECOND_PRIVATE_KEY,
  process.env.THIRD_PRIVATE_KEY,
];
