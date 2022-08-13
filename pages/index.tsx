import React from "react";
import { useForm } from "react-hook-form";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Checkbox from "../components/Checkbox";
import NumberInput from "../components/NumberInput";
import RadioButton from "../components/RadioButton";
import { Variables, industries, scales } from "../utils";

function HomePage() {
  const { register, handleSubmit, watch, formState } = useForm<Variables>();
  return (
    <>
      <Hero>
        <h1>ブラック企業チェック</h1>
      </Hero>
      <Container>
        <form action="/result" method="GET">
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
