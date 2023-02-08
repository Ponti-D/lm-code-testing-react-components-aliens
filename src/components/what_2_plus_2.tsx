import React from "react";

interface WhatIs2Plus2Props {
  value: string;
  onChangeWhatIs2Plus2: (newValue: string) => void;
}

const WhatIs2Plus2: React.FC<WhatIs2Plus2Props> = ({
  value,
  onChangeWhatIs2Plus2,
}) => {
  return (
    <div>
      <label>What is 2 + 2? </label>
      <select
        name="whatIs2Plus2"
        id="whatIs2Plus2"
        value={value}
        onChange={(e) => onChangeWhatIs2Plus2(e.target.value)}
      >
         <option value="4">4</option>
        <option value="Not 4">Not 4</option>
      </select>
    </div>
  );
};
export default WhatIs2Plus2;
