import React from "react";
import { useForm } from "react-hook-form";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Checkbox from "../components/Checkbox";
import NumberInput from "../components/NumberInput";
import RadioButton from "../components/RadioButton";
import { Variables, industries, scales } from "../utils";
import Question from "../components/Question";
import Slider from "../components/Slider";

function HomePage() {
  const { register } = useForm<Variables>();
  return (
    <>
      <Hero>
        <h1 className="text-4xl">３年以内離職判定</h1>
        <p>未完成です。</p>
      </Hero>
      <Container>
        <form
          className="flex flex-col items-center w-full gap-12 py-8"
          action="/result"
          method="GET"
        >
          <h2 className="text-2xl">あなたの情報を教えてください。</h2>
          <Question caption="男性ですか？">
            <RadioButton {...register("isMan")} label="はい" value={1} />
            <RadioButton {...register("isMan")} label="いいえ" value={0} />
          </Question>

          <Question caption="難関大学に進学していますか？">
            <RadioButton {...register("isDifficult")} label="はい" value={1} />
            <RadioButton
              {...register("isDifficult")}
              label="いいえ"
              value={0}
            />
          </Question>

          <Question caption="年齢を入力してください">
            <Slider {...register("age")} min={0} max={100} defaultValue={22} />
          </Question>

          <Question caption="成績の中で優の割合を入力してください">
            <RadioButton {...register("isMan")} label="はい" value={1} />
            <RadioButton {...register("isMan")} label="いいえ" value={0} />
          </Question>

          <h2 className="text-2xl">就職先の情報を教えてください。</h2>
          <Question caption="第１志望ですか">
            <RadioButton {...register("isMan")} label="はい" value={1} />
            <RadioButton {...register("isMan")} label="いいえ" value={0} />
          </Question>

          <Question caption="どの業界ですか">
            <RadioButton {...register("isMan")} label="はい" value={1} />
            <RadioButton {...register("isMan")} label="いいえ" value={0} />
          </Question>

          <Question caption="第１志望ですか">
            <RadioButton {...register("isMan")} label="はい" value={1} />
            <RadioButton {...register("isMan")} label="いいえ" value={0} />
          </Question>

          <div className="flex">
            <input type="checkbox" name="" id="" />
          </div>
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
            label="成績の優の割合(0 〜 1)"
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
          <input type="submit" value="判定する" />
        </form>
      </Container>
    </>
  );
}

export default HomePage;
