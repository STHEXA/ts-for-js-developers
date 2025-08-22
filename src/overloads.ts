export {};

// シグネチャ
function double(val: number): number;
function double(val: string): string;

function double(val: any): any {
  if (typeof val === "number") {
    return val * 2;
  } else {
    return val + val;
  }
}

console.log(double(100));
console.log(double("hello"));
