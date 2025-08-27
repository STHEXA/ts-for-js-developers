export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: "sawaki",
  age: 31,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: "jon",
  age: 30,
};

// friend.age++;

type YomitoriType<T> = {
  readonly [P in keyof T]: T[P];
};

type YomitorisenyouProfile = YomitoriType<Profile>;
