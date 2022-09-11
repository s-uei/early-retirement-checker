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
    <div className="flex flex-col justify-end flex-1 relative h-12">
      <style jsx>{`
        input[type="range"] {
        }
        input[type="range"]::-webkit-slider-thumb {
          background-color: green;
        }
      `}</style>
      <div
        className="absolute top-0 bg-white text-black w-8 h-8 flex justify-center items-center rounded-full"
        style={{ left: value + "%", transform: "translate(-50%)" }}
      >
        {value}
      </div>
      <input
        {...p}
        onChange={(e) => {
          if (props.onChange) props.onChange(e);
          setValue(Number(e.target.value));
        }}
        ref={ref}
        type="range"
        className="w-full"
      />
    </div>
  );
}

export default React.forwardRef(Slider);
