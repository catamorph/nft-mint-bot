const { Worker } = require("worker_threads");

const createWorker = () => {
  return new Promise(function (resolve, reject) {
    const worker = new Worker("./worker.js", {
      workerData: { string: "hello" },
    });
    worker.on("message", (data: any) => {
      resolve(data);
    });
    worker.on("error", (msg: any) => {
      reject(`An error ocurred: ${msg}`);
    });
  });
};
