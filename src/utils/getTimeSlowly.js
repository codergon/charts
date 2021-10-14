import * as dayjs from "dayjs";

export const getTimeSlowly = (n) => {
  console.log("Getting Time slowly");
  for (let i = 0; i < 1000; i++) {}
  return dayjs().format("HH:mm:ss A");
};
