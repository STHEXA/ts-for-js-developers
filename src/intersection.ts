export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAve: number;
};

const sasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const otiai: Batter1 = {
  battingAve: 0.367,
};

//既存の型を組み合わせて新たな型定義をされた型をインターセクション型という。
//インターセクション型は以下のように定義
type TwoWayPlayer = Pitcher1 & Batter1;

const ootani: TwoWayPlayer = {
  throwingSpeed: 160,
  battingAve: 0.4,
};
