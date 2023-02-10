import  { useState } from "react";
import ErrorMessage from "./error_message";

export interface NumberOfBeingsProps {
  value: string;
  onChangeNoOfBeing: (newValue: string) => void;
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({
    value,
  onChangeNoOfBeing,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>('');

  const validate: (value: string) => string | undefined = (value) => {
   
    if (!/^[0-9]+$/.test(value)) {
      return 'Only numbers allowed'
    };
    if(parseInt(value) < 1000000000) {
      return 'Number of beings must be at least 1,000,000,000'
    } 
    return '';
  };

  return (
    <div>
      <label htmlFor="numberOfBeings" >Number Of Beings:</label>
      <input
        type='text'
        value={value}
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