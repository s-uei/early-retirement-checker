import React, { InputHTMLAttributes } from "react";

function RadioButton(
  props: InputHTMLAttributes<HTMLInputElement> & {
    label: string;
  },
  ref: React.LegacyRef<HTMLInputElement>
) {
  const { label } = props;
  return (
    <div className="flex w-52 h-10 items-center gap-2">
      <input
        {...props}
        ref={ref}
        type="radio"
        className="w-5 h-5 flex shrink-0 accent-green-400"
      />
      <label>{label}</label>
    </div>
  );
}

export default React.forwardRef(RadioButton);
