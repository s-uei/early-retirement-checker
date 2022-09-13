import React from "react";
import { useForm } from "react-hook-form";
import Container from "../components/Container";
import Hero from "../components/Hero";
import RadioButton from "../components/RadioButton";
import { Variables, industries, scales } from "../utils";
import Question from "../components/Question";
import Slider from "../components/Slider";
import { useRouter } from "next/router";

function HomePage() {
  const { register, handleSubmit, formState } = useForm<Variables>();
  console.log(formState);
  const router = useRouter();
  return (
    <>
      <Hero>
        <h1>早期退職判定</h1>
        <p>※開発中です</p>
      </Hero>
      <Container>
        <form
          onSubmit={handleSubmit((d) => {
            router.push({
              pathname: "/result",
              query: d,
            });
          })}
          className="flex flex-col items-center w-full gap-12 py-8"
        >
          <h2 className="text-2xl">あなたの情報を教えてください。</h2>
          <Question caption="男性ですか？">
            <RadioButton
              {...register("isMan", { required: true })}
              label="はい"
              value={1}
            />
            <RadioButton
              {...register("isMan", { required: true })}
              label="いいえ"
              value={0}
            />
          </Question>

          <Question caption="難関大学に進学していますか？">
            <RadioButton
              {...register("isDifficult", { required: true })}
              label="はい"
              value={1}
            />
            <RadioButton
              {...register("isDifficult", { required: true })}
              label="いいえ"
              value={0}
            />
          </Question>

          <Question caption="年齢を入力してください">
            <Slider
              {...register("age", { required: true })}
              min={0}
              max={100}
              defaultValue={22}
            />
          </Question>

          <Question caption="成績の中で優の割合を入力してください">
            <Slider
              {...register("highGradeRate", { required: true })}
              min={0}
              max={100}
              defaultValue={50}
              unit="%"
            />
          </Question>

          <h2 className="text-2xl">就職先の情報を教えてください。</h2>
          <Question caption="第１志望ですか？">
            <RadioButton
              {...register("isTop", { required: true })}
              label="はい"
              value={1}
            />
            <RadioButton
              {...register("isTop", { required: true })}
              label="いいえ"
              value={0}
            />
          </Question>

          <Question caption="どの業界ですか？">
            {industries.map((ind, i) => (
              <RadioButton
                key={"ind" + i}
                {...register("industry", { required: true })}
                label={ind}
                value={ind}
              />
            ))}
          </Question>

          <Question caption="企業規模はどのくらいですか？">
            {scales.map((scale, i) => (
              <RadioButton
                key={"scale" + i}
                {...register("scale", { required: true })}
                label={scale}
                value={scale}
              />
            ))}
          </Question>

          <Question caption="有効求人倍率は？">
            <Slider
              {...register("jobsToApplicantsRatio", { required: true })}
              min={0}
              max={3}
              defaultValue={1.2}
              step={0.01}
            />
          </Question>

          <input
            className="bg-green-400 text-white font-bold shadow w-full h-16 flex justify-center items-center cursor-pointer select-none rounded"
            type="submit"
            value="判定する"
          />
        </form>
      </Container>
    </>
  );
}

export default HomePage;
