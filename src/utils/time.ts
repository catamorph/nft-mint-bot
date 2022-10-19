const convertUnixTimestampToMS = (unixTimestamp: number) => {
  const date = new Date(unixTimestamp * 1000);
  const ms = date.getMilliseconds();
  return ms;
};
export default convertUnixTimestampToMS;
