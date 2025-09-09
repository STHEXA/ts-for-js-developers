export {};

const add = (a: number, b: number) => {
  return a + b;
};

type ReturnTypeFromAdd = ReturnType<typeof add>;
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
//inferは推論するという意味。
// 上記の式は推論した型を返り値の型とするという意味
