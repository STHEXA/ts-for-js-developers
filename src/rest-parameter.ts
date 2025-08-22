export {};

const reducer = (accumulator: number, currentVal: number) => {
  console.log({ accumulator, currentVal });
  return accumulator + currentVal;
};

const sum = (...val: number[]): number => {
  return val.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));
