import dotenv from 'dotenv';
dotenv.config();

export const NODE_URL = process.env.NODE_URL as string;
export const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS as string;
export const FIRST_PRIVATE_KEY = process.env.FIRST_PRIVATE_KEY as string;
export const SECOND_PRIVATE_KEY = process.env.SECOND_PRIVATE_KEY as string;
export const THIRD_PRIVATE_KEY = process.env.THIRD_PRIVATE_KEY as string;
export const PRIVATE_KEYS = [FIRST_PRIVATE_KEY, SECOND_PRIVATE_KEY, THIRD_PRIVATE_KEY];
