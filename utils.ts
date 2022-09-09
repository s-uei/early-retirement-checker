import NormalDistribution from "normal-distribution";

const standardNormalDistribution = new NormalDistribution();

export const industries = [
  "製造業・建設業",
  "商社・卸売",
  "百貨店・小売店、飲食店",
  "金融・保険業",
  "運輸・通信・電気・ガス・水道",
  "マスコミ・広告・コンサルティング",
  "ソフトウェア・情報処理",
  "教育・保育",
  "医薬、医療・福祉・介護",
  "サービス",
  "公務（学校・病院・福祉施設を除く）",
] as const;

export const scales = [
  "29人以下",
  "30〜99人",
  "100〜299人",
  "300〜499人",
  "500〜999人",
  "1000〜4999人",
  "5000人以上",
] as const;

export type Industry = typeof industries[number];
export type Scale = typeof scales[number];

export type Variables = {
  isMan?: string;
  age?: string;
  isDifficult?: string;
  highGradeRate?: string;
  isTop?: string;
  industry?: Industry;
  scale?: Scale;
  jobsToApplicantsRatio?: string;
};

export type NumeralVariables = {
  isMan: number;
  age: number;
  isDifficult: number;
  highGradeRate: number;
  isTop: number;
  industry: Industry;
  scale: Scale;
  jobsToApplicantsRatio: number;
};

function getIndustryRate(i?: Industry): number {
  switch (i) {
    case "製造業・建設業":
      return 0.121;
    case "商社・卸売":
      return 0.32;
    case "百貨店・小売店、飲食店":
      return 0.226;
    case "金融・保険業":
      return 0.055;
    case "運輸・通信・電気・ガス・水道":
      return 0.126;
    case "マスコミ・広告・コンサルティング":
      return 0.385;
    case "ソフトウェア・情報処理":
      return 0.063;
    case "教育・保育":
      return -0.053;
    case "医薬、医療・福祉・介護":
      return 0.029;
    case "サービス":
      return 0.355;
    case "公務（学校・病院・福祉施設を除く）":
      return 0.176;
  }
  return 0;
}

function getScaleRate(s?: Scale): number {
  switch (s) {
    case "29人以下":
      return 0.265;
    case "30〜99人":
      return 0.125;
    case "100〜299人":
      return 0.026;
    case "300〜499人":
      return 0.04;
    case "500〜999人":
      return -0.093;
    case "1000〜4999人":
      return -0.047;
    case "5000人以上":
      return -0.093;
  }
  return 0;
}

export function convertNumeral(v: Variables): NumeralVariables | undefined {
  return undefined;
}

function isUndefinedAnyitem(...v: any[]) {
  if (v.find((el) => el === undefined)) return true;
  return false;
}

export function computeProb(v: Variables): number | undefined {
  if (
    isUndefinedAnyitem(
      v.isMan,
      v.age,
      v.isDifficult,
      v.highGradeRate,
      v.isTop,
      v.industry,
      v.scale,
      v.jobsToApplicantsRatio
    )
  ) {
    return undefined;
  }
  const x =
    Number(v.isMan) * -0.018 +
    Number(v.age) * -0.005 +
    Number(v.isDifficult) * -0.06 +
    (Number(v.highGradeRate) / 100) * 0.006 +
    Number(v.isTop) * -0.04 +
    getIndustryRate(v.industry) +
    getScaleRate(v.scale) +
    Number(v.jobsToApplicantsRatio) * 0.054;
  return standardNormalDistribution.cdf(x);
}
