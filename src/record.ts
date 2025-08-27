export {};

type Prefectures = "Tokyo" | "Shizuoka" | "Kanagawa" | "Osaka";

type coronaInfo = {
  kannjiName: string;
  kannsennsya: number;
};

// const covid19Japan: {
//     Tokyo: {
//         kannjiName: string;
//         kannsennsya: number;
//     };
//     Shizuoka: {
//         kannjiName: string;
//         kannsennsya: number;
//     };
//     Kanagawa: {
//         kannjiName: string;
//         kannsennsya: number;
//     };
//     Osaka: {
//         kannjiName: string;
//         kannsennsya: number;
//     };
// } = {
//   Tokyo: { kannjiName: "東京", kannsennsya: 2000 },
//   Shizuoka: { kannjiName: "静岡", kannsennsya: 200 },
//   Kanagawa: { kannjiName: "神奈川", kannsennsya: 1700 },
//   Osaka: { kannjiName: "大阪", kannsennsya: 1000 },
// };

const covid19Japan: Record<Prefectures, coronaInfo> = {
  Tokyo: { kannjiName: "東京", kannsennsya: 2000 },
  Shizuoka: { kannjiName: "静岡", kannsennsya: 200 },
  Kanagawa: { kannjiName: "神奈川", kannsennsya: 1700 },
  Osaka: { kannjiName: "大阪", kannsennsya: 1000 },
};
