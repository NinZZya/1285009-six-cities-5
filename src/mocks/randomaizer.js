export const getRandomBool = () => Math.random > 0.5;
export const getRandomInt = (min, max) => min + Math.floor(Math.random() * (max - min));
export const getRandomArrValue = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const getRandomArr = (arr, length = arr.length) => {
  const randomArr = arr.slice();
  randomArr.sort(() => Math.random() - 0.5);

  return randomArr.slice(0, length);
};
