export {};
const bmi = (height: number, weight: number): number =>
  weight / (height * height);

bmi(1.62, 64);

const bmi2 = (height: number, weight: number, log?: boolean): number => {
  if (log) {
    console.log(weight / (height * height));
  }
  return weight / (height * height);
};

bmi2(1.62, 64);
