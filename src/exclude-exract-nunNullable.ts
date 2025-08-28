export {};

type DebugType = () => void;
type SomeType = string | number | DebugType;

// 指定した型を排除
type FunctionType = Exclude<SomeType, string | number>;
type NonFunctionType = Exclude<SomeType, DebugType>;
type TypeExcludingFunction = Exclude<SomeType, Function>;

// 指定した型を抽出
type FunctionTypeByExtract = Extract<SomeType, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeType, string | number>;
type FunctionTypeExtractingFunction = Extract<SomeType, Function>;

//nullableの型を排除
type NullableType = string | number | null | undefined;
type NonNullableType = NonNullable<NullableType>;
