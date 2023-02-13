import { useState } from "react";
import ErrorMessage from "./error_message";

interface WhatIs2Plus2Props {
  value: string;
  onChangeWhatIs2Plus2: (newValue: string) => void;
}

const WhatIs2Plus2: React.FC<WhatIs2Plus2Props> = ({
  value,
  onChangeWhatIs2Plus2,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const validate = (value: string) => {
    if (value === '4') return undefined;
    if (value === 'Not 4') return 'Error - not quite correct - try again!';
    
    
  };
  return (
   
    <div>
      <label htmlFor="whatIs2Plus2" >What is 2 + 2?  </label>
      <select
        name='whatIs2Plus2'
        id='whatIs2Plus2'
        value={value}
        onChange={(e) => {
          const errorMessage = validate(e.target.value);
          setErrorMessage(errorMessage);
          onChangeWhatIs2Plus2(e.target.value);
        }}
      >
        <option value="empty"> </option>
        <option value='4'>4</option>
        <option value='Not 4'>Not 4</option>
      </select>
      <ErrorMessage message={errorMessage} />
    </div>
    
  );
};
export default WhatIs2Plus2;
