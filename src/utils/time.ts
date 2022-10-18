const convertUnixTimestampToMS = (unitTimestamp: number) => {
  const date = new Date(unitTimestamp * 1000);
  const ms = date.getMilliseconds();
  console.log('ms', ms);
  //retur ms
  return 1000;
};
export default convertUnixTimestampToMS;
