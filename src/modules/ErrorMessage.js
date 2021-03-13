const ErrorMessage = ({errorMessage}) => {
    return (
        <div className="error">
            <p><code>An error has occured: {errorMessage}</code></p>
        </div>
    );
}
 
export default ErrorMessage;