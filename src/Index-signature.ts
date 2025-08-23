export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  //インデックスシグネチャ
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: "sawaki", underTwenty: false };

profile.name = "sawaki";
profile.age = 31;
