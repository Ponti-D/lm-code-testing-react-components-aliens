import React from "react";

interface NumberOfBeingsProps {
  value: string;
  onChangeNoOfBeing: (newValue: string) => void;
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
        onChange={(e) => onChangeNoOfBeing(e.target.value)}
      />
    </div>
  );
};
export default NumberOfBeings;