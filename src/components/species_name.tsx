import { useState } from "react";
import ErrorMessage from "./error_message";

export interface SpeciesNameProps {
  value: string;
  onChangeSpeciesName: (newValue: string) => void;
}

const SpeciesName: React.FC<SpeciesNameProps> = ({
  value,
  onChangeSpeciesName,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>('');

  const validate: (value: string) => string | undefined = (value) => {
    //Species Name: Must be between 3 and 23 characters. No numbers or special characters allowed!
    if (value.length < 3 || value.length > 23) {
      return 'Species Name must be between 2 and 23 characters';
    }
    if (!/^[A-Za-z ]*$/.test(value)) {
      return 'No numbers or special characters allowed';
    }
    return '';
  };
  return (
    <>
      <div>
        <label htmlFor="speciesName">Species Name:</label>
        <input
          type='text'
          value={value}
          name='speciesName'
          onChange={(e) => {
            const errorMessage = validate(e.target.value);
            setErrorMessage(errorMessage);
            onChangeSpeciesName(e.target.value)
          }}
        />
        <ErrorMessage message={errorMessage}/>
        
      </div>
    </>
  );
};
export default SpeciesName;
