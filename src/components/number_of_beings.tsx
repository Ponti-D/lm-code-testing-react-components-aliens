import React from "react";

interface NumberOfBeingsProps {
  value: number;
  onChangeNoOfBeing: (newValue: number) => void;
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({
    value,
  onChangeNoOfBeing,
}) => {
  return (
    <div>
      <label>Number Of Beings:</label>
      <input
        type="text"
        value={value}
        name="numberOfBeings"
        onChange={(e) => onChangeNoOfBeing(e.target.valueAsNumber)}
      />
    </div>
  );
};
export default NumberOfBeings;