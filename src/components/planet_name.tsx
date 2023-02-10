import { useState } from "react";
import ErrorMessage from "./error_message";

export interface PlanetNameProps {
  value: string;
  onChangePlanetName: (newValue: string) => void;
}

const PlanetName: React.FC<PlanetNameProps> = ({
  value,
  onChangePlanetName,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>('');

  const validate: (value: string) => string | undefined = (value) => {
    if (value.length < 3 || value.length > 23) {
      return 'Planet name must be between 2 and 23 characters';
    }
    if (!/^[A-Za-z0-9 ]*$/.test(value)) {
      return 'No special characters allowed';
    }
    return '';

  };

  return (
    <>
    <div>
      <label htmlFor="planetName">Planet Name:</label>
      <input
        type="text"
        value={value}
        name="planetName"
        onChange={(e) => {
          const errorMessage = validate(e.target.value);
          setErrorMessage(errorMessage);
          onChangePlanetName(e.target.value)
        }}
      />
      <ErrorMessage message={errorMessage}/>
     
    </div>
    </>
  );
};
export default PlanetName;
