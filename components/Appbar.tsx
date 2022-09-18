import React from "react";

function Appbar(props: { children?: React.ReactNode }) {
  return (
    <div className="fixed top-0 flex w-full bg-black text-white items-center z-50">
      {props.children}
    </div>
  );
}

export default Appbar;
