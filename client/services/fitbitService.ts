import HeartRate from '../models/fitbis'

const data = require('../assets/data.json')

const noOfPixel = 24 * 24

// TODO add mod and then reduce array

export const getFitbitData = async (
  startTime: string,
  stopTime: string
): Promise<string[]> => {
  return await getData(startTime, stopTime).then(data => {
    if (data && data.length > noOfPixel / 2) {
      return convertHexArray(data)
    } else {
      return 'Meditation was to short'
    }
  })
}

const getData = async (
  startTime: string,
  stopTime: string
): Promise<HeartRate[]> => {
  return await data['activities-heart-intraday'].dataset
}
const convertHexArray = (activity: HeartRate[]): any => {
  const heartRateArray = activity.map(x => x.value)

  return getAverage(heartRateArray)?.map(number => toHex(number))
}

const toHex = (
  num: number,
  hexString = 'EF0123456789ABCD',
  hex = ''
): string | boolean => {
  if (hexString.length !== 16) {
    return false
  }

  num = Math.abs(num)
  if (num && typeof num === 'number') {
    //recursively append the remainder to hex and divide num by 16
    return toHex(
      Math.floor(num / 16),
      hexString,
      `${hexString[num % 16]}${hex}`
    )
  }

  //  add colorscheme for range

  // return blue for between 60 and 70
  // red FF00
  // yellow FFFF
  // orange FFA5
  // green 00FF
  // blue 0000FF
  return '#' + '00' + '0f' + hex
}

const getAverage = (heartRateArray: number[]) => {
  console.log(heartRateArray)

  if (heartRateArray.length > noOfPixel) {
    return shortenArray(heartRateArray, noOfPixel)
  }
  if (heartRateArray.length < noOfPixel) {
    return shortenArray(
      heartRateArray.flatMap(i => [i, i]),
      noOfPixel
    )
  }
}

const shortenArray = (heartRateArray: number[], noOfPixel: number) => {
  const mod = heartRateArray.length % noOfPixel
  console.log(mod)

  const parts = heartRateArray.length / noOfPixel
  console.log(parts)

  heartRateArray = [...heartRateArray.slice(0, heartRateArray.length - mod)]
  let result: number[] = []

  // for (let i = 0; i < heartRateArray.length; i += parts) {
  //   let tempArray = []
  //   tempArray = heartRateArray.slice(i, i + parts)
  //   console.log(tempArray)
  //   result = [...result, reducer(tempArray, parts)]
  // }

  result = [...heartRateArray]

  console.log(result)

  return result
}

const reducer = (array: number[], parts: number) => {
  const initialValue = 0
  const sumWithInitial = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  )
  console.log(sumWithInitial / parts)

  return sumWithInitial / parts
}
