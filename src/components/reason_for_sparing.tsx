import React, { useState } from "react";
import ErrorMessage from "./error_message";

interface ReasonForSparingProps {
  reasonForSparing: string;
  onChangeReasonForSparing: (newValue: string) => void;
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({
  reasonForSparing,
  onChangeReasonForSparing,
}) => {

  const [errorMessage, setErrorMessage] = useState<string | undefined>('');

  const validate: (value: string) => string | undefined = (value) => {
    if (value.length < 17 || value.length > 153) {
      return 'Error - Reason must be between 17 and 153 characters';
    }
    return undefined;
  };

  return (
   
    <div>
      <label htmlFor='reasonforsparing' >Reason For Sparing:</label>
      <textarea       
        value={reasonForSparing}
        name='reasonforsparing'
        onChange={(e) => {         
          const errorMessage = validate(e.target.value);
          setErrorMessage(errorMessage);
          onChangeReasonForSparing(e.target.value)}}
      />
       <ErrorMessage message={errorMessage}/>     
    </div>
 
  );
};
export default ReasonForSparing;