import  { useState } from "react";
import ErrorMessage from "./error_message";

export interface NumberOfBeingsProps {
  numberOfBeings: string;
  onChangeNoOfBeing: (newValue: string) => void;
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({
  numberOfBeings,
  onChangeNoOfBeing,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>('');

  const validate: (value: string) => string | undefined = (value) => {
   
    if (parseInt(value) < 1000000000 || !/^[0-9]+$/.test(value)){ 
      return 'Error - Only numbers allowed. Number of beings must be at least 1,000,000,000 '
    } 
    return '';
  };

  return (
    <div>
      <label htmlFor="numberOfBeings" >Number Of Beings:</label>
      <input
        type='text'
        value={numberOfBeings}
        name='numberOfBeings'
        onChange={(e) => {
            const errorMessage = validate(e.target.value);
            setErrorMessage(errorMessage);
            onChangeNoOfBeing(e.target.value)
          }}
        />
        <ErrorMessage message={errorMessage}/>
    </div>
  );
};
export default NumberOfBeings;