const Error = ({errorMessage}) => {
    return (
        <div className="error">
            <h3>An error has occured: {errorMessage}</h3>
        </div>
    );
}
 
export default Error;