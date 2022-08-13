import React from "react";
import { useRouter } from "next/router";
import { computeBlackProb, Variables } from "../utils";
import Sharebar from "../components/Sharebar";

function ResultPage() {
  const router = useRouter();
  const v = router.query as Variables;
  const p = computeBlackProb(v);
  const data: { text: string; src: string; color: string } = isNaN(p)
    ? { text: "測定不能", src: "/img/nan.jpg", color: "text-gray-500" }
    : p > 0.4
    ? { text: "ブラックかも…", src: "/img/black.jpg", color: "text-red-500" }
    : p > 0.1
    ? { text: "グレー企業？", src: "/img/gray.jpg", color: "text-yellow-500" }
    : { text: "ホワイト企業！", src: "/img/white.jpg", color: "text-white" };
  const imgWidth = 800;
  const imgHeight = 533;
  const imgRatio = 0.5;
  return (
    <div className="flex flex-col w-screen min-h-screen bg-black text-white justify-center items-center gap-4 pt-12">
      <p>その会社…</p>
      <div className="flex flex-wrap items-center gap-8 w-full justify-center">
        <img
          src={data.src}
          alt="イメージ"
          width={imgWidth * imgRatio}
          height={imgHeight * imgRatio}
          className="rounded-full"
        />
        <div className="flex flex-col items-center">
          <p>ブラック度</p>
          <p>
            <span className="text-6xl">{Math.floor(p * 100)}</span>%
          </p>
          <h1 className={"font-bold " + data.color}>{data.text}</h1>
          <hr className="border w-full" />

          <p>男性:{v.isMan === "1" ? "はい" : "いいえ"}</p>
          <p>難関大学:{v.isDifficult === "1" ? "はい" : "いいえ"}</p>
          <p>成績の優の割合:{v.highGradeRate}</p>
          <p>第1志望:{v.isTop === "1" ? "はい" : "いいえ"}</p>
          <p>成績の優の割合：{v.highGradeRate}</p>
          <p>産業:{v.industry}</p>
          <p>企業規模:{v.scale}</p>
          <p>都道府県別有効求人倍率:{v.jobsToApplicantsRatio}</p>
        </div>
      </div>
      <Sharebar />
    </div>
  );
}
/**isMan?: string;
  age?: string;
  isDifficult?: string;
  highGradeRate?: string;
  isTop?: boolean;
  industry?: Industry;
  scale?: Scale;
  jobsToApplicantsRatio?: string; */

export default ResultPage;
