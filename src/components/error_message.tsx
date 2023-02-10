export const ErrorMessage: React.FC<{message:string | undefined}> = 
({message}) => (
    <div>
        <p>{message}</p>
    </div>

)
export default ErrorMessage