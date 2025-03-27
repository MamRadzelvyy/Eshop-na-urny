import React from "react";
import { Range } from "react-range";

const STEP = 100;
const MIN = 0;
const MAX = 15000;

export default function PriceRangeSlider({ values, onChange }) {
  const [minInput, maxInput] = values;

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const handleMinChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, "").replace(/^0+(?=\d)/, "");
    if (val === "") {
      onChange([MIN, values[1]]);
      return;
    }
    const num = clamp(parseInt(val), MIN, MAX);
    onChange([num, Math.max(num, values[1])]);
  };

  const handleMaxChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, "").replace(/^0+(?=\d)/, "");
    if (val === "") {
      onChange([values[0], MAX]);
      return;
    }
    const num = clamp(parseInt(val), MIN, MAX);
    onChange([Math.min(num, values[0]), num]);
  };

  return (
    <div className="w-full text-sm flex flex-col sm:flex-row sm:items-center sm:gap-4">
      <div className="flex-1">
        <Range
          values={values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={onChange}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "3px",
                width: "100%",
                background: "#ddd",
                borderRadius: "4px",
                position: "relative",
              }}
              className="my-1"
            >
              <div
                style={{
                  position: "absolute",
                  height: "100%",
                  background: "#2563eb",
                  borderRadius: "4px",
                  left: `${(values[0] / MAX) * 100}%`,
                  width: `${((values[1] - values[0]) / MAX) * 100}%`,
                }}
              />
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "12px",
                width: "12px",
                backgroundColor: "#1e3a8a",
                borderRadius: "50%",
                boxShadow: "0 0 0 1px white",
              }}
            />
          )}
        />
      </div>

      <div className="flex justify-center items-center gap-2 mt-3 sm:mt-0 text-blue-900 font-medium">
        <input
          type="text"
          value={minInput.toString().replace(/^0+(?=\d)/, "")}
          onChange={handleMinChange}
          className="w-20 border rounded px-2 py-1 text-center text-base"
          inputMode="numeric"
          pattern="[0-9]*"
        />

        <span className="text-lg">-</span>

        <input
          type="text"
          value={maxInput.toString().replace(/^0+(?=\d)/, "")}
          onChange={handleMaxChange}
          className="w-20 border rounded px-2 py-1 text-center text-base"
          inputMode="numeric"
          pattern="[0-9]*"
        />
      </div>
    </div>
  );
}
