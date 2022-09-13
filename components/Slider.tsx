import React, { InputHTMLAttributes, useState } from "react";

function Slider(
  props: InputHTMLAttributes<HTMLInputElement> & {
    unit?: string;
  },
  ref: React.LegacyRef<HTMLInputElement>
) {
  const unit = props.unit ?? "";
  const [value, setValue] = useState(Number(props.defaultValue));
  const min = Number(props.min);
  const max = Number(props.max);
  const p = { ...props };
  delete p.unit;
  return (
    <div className="flex flex-col justify-end w-full h-12">
      <div className="flex flex-1">
        <div className="w-3"></div>
        <div className="flex-1 relative">
          <div
            className="absolute top-0 bg-white text-black w-8 h-8 flex justify-center items-center rounded-full select-none text-xs"
            style={{
              left: ((value - min) / max) * 100 + "%",
              transform: "translate(-50%)",
            }}
          >
            {value + unit}
          </div>
        </div>
        <div className="w-3"></div>
      </div>

      <input
        {...p}
        onChange={(e) => {
          if (props.onChange) props.onChange(e);
          setValue(Number(e.target.value));
        }}
        ref={ref}
        type="range"
        className="input-range"
      />
    </div>
  );
}

export default React.forwardRef(Slider);
