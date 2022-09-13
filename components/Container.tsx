import React from "react";

function Container(props: { children?: React.ReactNode }) {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col w-full items-center max-w-2xl px-2">
        {props.children}
      </div>
    </div>
  );
}

export default Container;
