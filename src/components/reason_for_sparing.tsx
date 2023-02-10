import React, { useState } from "react";
import ErrorMessage from "./error_message";

interface ReasonForSparingProps {
  value: string;
  onChangeReasonForSparing: (newValue: string) => void;
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({
  value,
  onChangeReasonForSparing,
}) => {

  const [errorMessage, setErrorMessage] = useState<string | undefined>('');

  const validate: (value: string) => string | undefined = (value) => {
    if (value.length < 17 || value.length > 153) {
      return 'Reason must be between 17 and 153 characters';
    }
    return '';
  };

  return (
    <>
    <div>
      <label htmlFor='reasonforsparing' >Reason For Sparing:</label>
      <textarea       
        value={value}
        name='reasonforsparing'
        onChange={(e) => {         
          const errorMessage = validate(e.target.value);
          setErrorMessage(errorMessage);
          onChangeReasonForSparing(e.target.value)}}
      />
       <ErrorMessage message={errorMessage}/>     
    </div>
    </>
  );
};
export default ReasonForSparing;