export interface ErrorMessageProps {
    message: string | undefined;
}
const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <p className="message-error">{message}</p> ;
};
export default ErrorMessage;
