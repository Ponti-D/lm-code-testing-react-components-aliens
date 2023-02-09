import React from "react";

export interface PlanetNameProps {
  value: string;
  onChangePlanetName: (newValue: string) => void;
}

const PlanetName: React.FC<PlanetNameProps> = ({
  value,
  onChangePlanetName,
}) => {
  return (
    <div>
      <label htmlFor="planetName">Planet Name:</label>
      <input
        type="text"
        value={value}
        name="planetName"
        onChange={(e) => onChangePlanetName(e.target.value)}
      />
    </div>
  );
};
export default PlanetName;
