import React, { InputHTMLAttributes } from "react";

function NumberInput(
  props: InputHTMLAttributes<HTMLInputElement> & { label: string },
  ref: React.LegacyRef<HTMLInputElement>
) {
  const { label } = props;
  return (
    <div className="flex flex-col">
      <label htmlFor={label}>{label}</label>
      <input {...props} ref={ref} type="number" id={label} />
    </div>
  );
}

export default React.forwardRef(NumberInput);
