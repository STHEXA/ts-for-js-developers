export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile("tai", 31);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ["taro", 22];

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
