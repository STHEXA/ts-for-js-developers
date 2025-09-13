export {};

class Parson {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Parson("taro", 30);
console.log(taro);

type ParsonType = typeof Parson;

type Profile = ConstructorParameters<ParsonType>;

const profile: Profile = ["sawa", 35];
const sawa = new Parson(...profile);
console.log(sawa);
