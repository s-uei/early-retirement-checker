import React, { InputHTMLAttributes } from "react";

function RadioButton(
  props: InputHTMLAttributes<HTMLInputElement> & {
    label: string;
  },
  ref: React.LegacyRef<HTMLInputElement>
) {
  const { label } = props;
  return (
    <div className="flex">
      <input {...props} ref={ref} type="radio" id={label} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}

export default React.forwardRef(RadioButton);
