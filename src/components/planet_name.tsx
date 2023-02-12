import { useState } from "react";
import ErrorMessage from "./error_message";

export interface PlanetNameProps {
  planetName: string;
  onChangePlanetName: (newValue: string) => void;
}

const PlanetName: React.FC<PlanetNameProps> = ({
  planetName,
  onChangePlanetName,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const validate: (value: string) => string | undefined = (value) => {
    if (value.length < 2 || value.length > 49 || !/^[a-zA-Z0-9 ]*$/.test(value)) {
      return "Error - Planet Name must be between 2 and 49 characters. Numbers are allowed, but no special characters.";
    }
    return undefined;
  };

  return (
    <div>
      <label htmlFor="planetName">Planet Name:</label>
      <input
        type="text"
        value={planetName}
        name="planetName"
        onChange={(e) => {
          const errorMessage = validate(e.target.value);
          setErrorMessage(errorMessage);
          onChangePlanetName(e.target.value);
        }}
      />
      <ErrorMessage message={errorMessage} />
    </div>
  );
};
export default PlanetName;
