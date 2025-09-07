export {};

const add = (a: number, b: number) => {
  return a + b;
};

type ReturnTypeFromAdd = ReturnType<typeof add>;
