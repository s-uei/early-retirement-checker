import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Checkbox from "../components/Checkbox";
import NumberInput from "../components/NumberInput";
import RadioButton from "../components/RadioButton";

const industries = [
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

const scales = [
  "29人以下",
  "30〜99人",
  "100〜299人",
  "300〜499人",
  "500〜999人",
  "1000〜4999人",
  "5000人以上",
] as const;

type Industry = typeof industries[number];
type Scale = typeof scales[number];

interface Variables {
  isMan: string;
  age: string;
  isDifficult: string;
  highGradeRate: string;
  isTop: string;
  industry: Industry;
  scale: Scale;
  jobsToApplicantsRatio: string;
}

function getIndustryRate(i: Industry): number {
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
}

function getScaleRate(s: Scale): number {
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
}

function computeBlackProb(v: Variables): number {
  return (
    Number(v.isMan) * -0.018 +
    Number(v.age) * -0.005 +
    Number(v.isDifficult) * -0.06 +
    Number(v.highGradeRate) * 0.006 +
    Number(v.isTop) * -0.04 +
    getIndustryRate(v.industry) +
    getScaleRate(v.scale) +
    Number(v.jobsToApplicantsRatio) * 0.054
  );
}

function HomePage() {
  const [prob, setProb] = useState<number | undefined>(undefined);
  const { register, handleSubmit, watch, formState } = useForm<Variables>();
  const onSubmit: SubmitHandler<Variables> = (data) =>
    setProb(computeBlackProb(data));
  if (prob !== undefined) {
    return <div>{prob}</div>;
  }
  return (
    <div className="flex flex-col">
      <Hero>
        <h1>Black Checker</h1>
      </Hero>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Checkbox {...register("isMan")} label="男性" />
          <NumberInput
            {...register("age")}
            max={150}
            min={0}
            defaultValue={22}
            label="年齢"
          />
          <Checkbox {...register("isDifficult")} label="難関大学" />
          <NumberInput
            {...register("highGradeRate")}
            max={1}
            min={0}
            step={0.01}
            defaultValue={0.5}
            label="成績での優の割合(0 〜 1)"
          />
          <Checkbox {...register("isTop")} label="第1志望" />
          <div className="flex flex-col">
            <label>産業</label>
            {industries.map((e, i) => (
              <RadioButton
                {...register("industry")}
                label={e}
                key={e}
                defaultChecked={i === 0}
              />
            ))}
          </div>
          <div className="flex flex-col">
            <label>企業規模</label>
            {scales.map((e, i) => (
              <RadioButton
                {...register("scale")}
                label={e}
                key={e}
                defaultChecked={i === 0}
              />
            ))}
          </div>
          <NumberInput
            {...register("jobsToApplicantsRatio")}
            label="都道府県別有効求人倍率"
            min={0}
            step={0.01}
            defaultValue={1.2}
          />
          <input type="submit" />
        </form>
      </Container>
    </div>
  );
}

export default HomePage;
