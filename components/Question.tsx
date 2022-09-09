import React from "react";
import clsx from "clsx";

function Question(props: {
  caption: string;
  children?: React.ReactNode;
  isInvalid?: boolean;
}) {
  const isInvalid = props.isInvalid ?? false;
  return (
    <fieldset
      className={clsx(
        "bg-black flex items-center justify-between w-full text-white p-4 rounded",
        {
          "border-red-500": isInvalid,
        }
      )}
    >
      <legend className="bg-black px-4 text-xl rounded">{props.caption}</legend>
      {props.children}
    </fieldset>
  );
}

export default Question;
