import HeartRate from "../models/fitbit";

const data = require("../assets/data.json");

const noOfPixel = 24 * 24;

export const getNft = async (
  startTime: string,
  stopTime: string
): Promise<string> => {
  return await getFitBitData(startTime, stopTime).then((data) => {
    console.log(data);
    if (data && data.length > noOfPixel / 2) {
      return createNft(data);
    } else {
      return "Mediation was to short";
    }
  });
};

const getFitBitData = async (
  startTime: string,
  stopTime: string
): Promise<HeartRate[]> => {
  return data["activities-heart-intraday"].data;
};
const createNft = (activity: HeartRate[]): any => {
  const heartRateArray = activity.map((x) => x.value);
  return getAverage(heartRateArray)?.map((number) => toHex(number));
};

const toHex = (
  num: number,
  hexString = "0123456789ABCDEF",
  hex = ""
): string | boolean => {
  if (hexString.length !== 16) {
    return false;
  }
  num = Math.abs(num);
  if (num && typeof num === "number") {
    //recursively append the remainder to hex and divide num by 16
    return toHex(
      Math.floor(num / 16),
      hexString,
      `${hexString[num % 16]}${hex}`
    );
  }
  return hex;
};

const getAverage = (heartRateArray: number[]) => {
  if (heartRateArray.length > noOfPixel) {
    return shortenArray(heartRateArray, noOfPixel);
  }
  if (heartRateArray.length < noOfPixel) {
    return shortenArray(
      heartRateArray.flatMap((i) => [i, i]),
      noOfPixel
    );
  }
};

const shortenArray = (heartRateArray: number[], noOfPixel: number) => {
  const mod = heartRateArray.length % noOfPixel;
  const parts = heartRateArray.length - mod / noOfPixel;
  heartRateArray = [...heartRateArray.slice(0, heartRateArray.length - mod)];
  let result: number[] = [];

  for (let i = 0; i < heartRateArray.length; i += parts) {
    let tempArray;
    tempArray = heartRateArray.slice(i, i + parts);
    console.log(tempArray);
    result = [...result, reducer(tempArray, parts)];
  }

  return result;
};

const reducer = (array: number[], parts: number) => {
  const initialValue = 0;
  const sumWithInitial = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  return sumWithInitial / parts;
};
