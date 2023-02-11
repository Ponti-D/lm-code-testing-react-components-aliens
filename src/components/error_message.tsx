export interface ErrorMessageProps {
    message: string | undefined;
}
const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
        <p> {message}</p>  
  );
};
export default ErrorMessage;
