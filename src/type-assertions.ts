export {};

let name: any = "tai";

//型アサーションの付け方
// let length = name.length as number;
let length = (name as string).length;

// length = "sawa";
