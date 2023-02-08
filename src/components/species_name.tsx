import React from "react";

export interface SpeciesNameProps {
  value: string;
  onChangeSpeciesName: (newValue: string) => void;
}

const SpeciesName: React.FC<SpeciesNameProps> = ({
  value,
  onChangeSpeciesName,
}) => {
  return (
    <div>
      <label htmlFor='speciesName' >Species Name:</label>
      <input
        type="text"
        value={value}
        name="speciesName"
        onChange={(e) => onChangeSpeciesName(e.target.value)}
      />
    </div>
  );
};
export default SpeciesName;
 
