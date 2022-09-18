import React, { useEffect, useReducer, useState } from "react";
import { useRouter } from "next/router";
import { computeProb, Variables } from "../utils";
import Sharebar from "../components/Sharebar";
import clsx from "clsx";

function ResultPage() {
  const [isComputing, finishComputing] = useReducer((b) => false, true);
  const [urlForShare, setUrlForShare] = useState("/");
  const router = useRouter();
  const v = router.query as Variables;
  const p = computeProb(v);
  const data: { text: string; src: string; color: string } = isNaN(p)
    ? { text: "測定不能", src: "/img/nan.jpg", color: "text-gray-500" }
    : p > 0.4
    ? {
        text: "転職準備",
        src: "/img/black.jpg",
        color: "text-red-500",
      }
    : p > 0.1
    ? {
        text: "あなた次第",
        src: "/img/gray.jpg",
        color: "text-yellow-500",
      }
    : { text: "安心せずに", src: "/img/white.jpg", color: "text-white" };
  const imgWidth = 800;
  const imgHeight = 533;
  const imgRatio = 0.5;
  useEffect(() => {
    finishComputing();
    setUrlForShare(window.location.href);
  });
  if (isNaN(p))
    return (
      <div className="flex w-screen h-screen justify-center items-center">
        計算できませんでした。
      </div>
    );
  return (
    <div
      className={clsx(
        "flex flex-col w-screen min-h-screen bg-black text-white justify-center items-center gap-4 pt-12"
      )}
    >
      <p>あなたの早期離職確率は…</p>
      <div
        className={clsx(
          "flex flex-wrap items-center gap-8 w-full justify-center transition-all delay-500 duration-500",
          { "opacity-0": isComputing }
        )}
      >
        <img
          src={data.src}
          alt="イメージ"
          width={imgWidth * imgRatio}
          height={imgHeight * imgRatio}
          className="rounded-full"
        />
        <div className="flex flex-col items-center">
          <p>
            <span className="text-6xl">{Math.floor(p * 100)}</span>%
          </p>
          <h1 className={"font-bold " + data.color}>{data.text}</h1>
          <hr className="border w-full" />

          <p>男性:{v.isMan === "1" ? "はい" : "いいえ"}</p>
          <p>難関大学:{v.isDifficult === "1" ? "はい" : "いいえ"}</p>
          <p>年齢:{v.age}</p>
          <p>成績の優の割合:{v.highGradeRate}</p>
          <p>第1志望:{v.isTop === "1" ? "はい" : "いいえ"}</p>
          <p>産業:{v.industry}</p>
          <p>企業規模:{v.scale}</p>
          <p>都道府県別有効求人倍率:{v.jobsToApplicantsRatio}</p>
        </div>
      </div>
      <Sharebar
        url={urlForShare}
        message={`私の早期離職確率は${Math.floor(p * 100)}%でした。`}
      />
    </div>
  );
}

export default ResultPage;
