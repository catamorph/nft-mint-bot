const path = require('path');
const { workerData, parentPort } = require('worker_threads');
require('ts-node').register();

require(path.resolve(__dirname, 'worker.ts'));