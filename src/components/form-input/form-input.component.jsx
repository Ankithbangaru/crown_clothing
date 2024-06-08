import './form-input.styles.scss'

const FromInput = ({ label, ...otherProps }) => {
    return (
        <div className="group">
             <input className="form-input" {...otherProps} />
            {label && ( 
                <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label} 
                </label>
            )}
            {/* Input field */}
        </div>
    );
};
export default FromInput;
