import React from "react";
import Hero from "../components/Hero";

function HomePage(props: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <Hero>
        <h1>Black Checker</h1>
        <p>テスト</p>
      </Hero>
    </div>
  );
}

export default HomePage;
