export {};

type DetailedProfile = {
  name: string;
  weight: number;
  height: number;
};

type SimpleProfile = Pick<DetailedProfile, "name" | "weight">;
type SmallProfile = Omit<DetailedProfile, "height">;

type MyOmit = Pick<DetailedProfile, Exclude<keyof DetailedProfile, "height">>;
