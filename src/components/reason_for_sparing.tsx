import React from "react";

interface ReasonForSparingProps {
  value: string;
  onChangeReasonForSparing: (newValue: string) => void;
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({
  value,
  onChangeReasonForSparing,
}) => {
  return (
    <div>
      <label>Reason For Sparing: </label>
      <textarea
        
        value={value}
        name="reasonforsparing"
        onChange={(e) => onChangeReasonForSparing(e.target.value)}
      />
    </div>
  );
};
export default ReasonForSparing;