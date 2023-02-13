import { useState } from "react";
import ErrorMessage from "./error_message";

interface SpeciesNameProps {
  speciesName: string;
  onChangeSpeciesName: (newvalue: string) => void;
}

const SpeciesName: React.FC<SpeciesNameProps> = ({
  speciesName,
  onChangeSpeciesName,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const validate: (value: string) => string | undefined = (value) => {
    if (value.length < 3 || value.length > 23 || !/^[A-Za-z ]*$/.test(value)) {
      return "Error - Species Name must be between 3 and 23 characters. No numbers or special characters allowed";
    } 
    return undefined;
  };
  return (
   <div>
      <label htmlFor="speciesName">Species Name:</label>
      <input
        type="text"
        value={speciesName}
        name="speciesName"
        onChange={(e) => {
          const errmessage = validate(e.target.value);
          setErrorMessage(errmessage);
          onChangeSpeciesName(e.target.value);
        }}
      />
      <ErrorMessage message={errorMessage} />
    </div>
  );
};
export default SpeciesName;
