import React, { InputHTMLAttributes } from "react";

function Checkbox(
  props: InputHTMLAttributes<HTMLInputElement> & { label: string },
  ref: React.LegacyRef<HTMLInputElement>
) {
  const { label } = props;
  return (
    <div className="flex">
      <input {...props} ref={ref} type="checkbox" id={label} value="1" />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}

export default React.forwardRef(Checkbox);
