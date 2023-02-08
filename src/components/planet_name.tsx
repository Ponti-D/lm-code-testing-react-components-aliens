import React from "react";

interface PlanetNameProps {
  name: string;
  onChangePlanetName: (newValue: string) => void;
}

const PlanetName: React.FC<PlanetNameProps> = ({
  name,
  onChangePlanetName,
}) => {
  return (
    <div>
      <label>Planet Name:</label>
      <input
        type="text"
        value={name}
        name="planetName"
        onChange={(e) => onChangePlanetName(e.target.value)}
      />
    </div>
  );
};
export default PlanetName;
