export {};
enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January);
console.log(Months.February);

enum COLORS {
  RED = "#ff0000",
  WHITE = "#ffffff",
  GREEN = "#008000",
}

let green = COLORS.GREEN;
console.log(green);

//後から追加することもできる
enum COLORS {
  YELLOW = "#ffff00",
}

console.log(COLORS.YELLOW);
