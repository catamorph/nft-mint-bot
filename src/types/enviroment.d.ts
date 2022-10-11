export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_URL: string;
      CONTRACT_ADDRESS: string;
      FIRST_PRIVATE_KEY: string;
      SECOND_PRIVATE_KEY: string;
      THIRD_PRIVATE_KEY: string;
    }
  }
}
