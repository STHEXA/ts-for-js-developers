export {};

// type MyExclude<T> = T extends string | number ? never : T;
// type MyExclude<T> =
//   | (T extends string | number ? never : T)
//   | (T extends string | number ? never : T)
//   | (T extends string | number ? never : T);
// type MyExclude =
//   | (string extends string | number ? never : string)
//   | (number extends string | number ? never : number)
//   | (DebugType extends string | number ? never : DebugType);
// type MyExclude = never | never | DebugType;
type MyExclude = DebugType;
type DebugType = () => void;
type SomeType = string | number | DebugType;

// 指定した型を排除
type FunctionType = Exclude<SomeType, string | number>;
type MyFunctionType = MyExclude;

// 指定した型を抽出
type FunctionTypeByExtract = Extract<SomeType, DebugType>;

//nullableの型を排除
type NullableType = string | number | null | undefined;
type NonNullableType = NonNullable<NullableType>;
