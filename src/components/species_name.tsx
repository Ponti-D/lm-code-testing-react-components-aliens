import React from "react";

interface SpeciesNameProps {
  name: string;
  onChangeSpeciesName: (newValue: string) => void;
}

const SpeciesName: React.FC<SpeciesNameProps> = ({
  name,
  onChangeSpeciesName,
}) => {
  return (
    <div>
      <label>Species Name:</label>
      <input
        type="text"
        value={name}
        name="speciesName"
        onChange={(e) => onChangeSpeciesName(e.target.value)}
      />
    </div>
  );
};
export default SpeciesName;
