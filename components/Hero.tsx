import React from "react";

function Hero(props: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col bg-black text-white w-full h-96 justify-center items-center">
      {props.children}
    </div>
  );
}

export default Hero;
