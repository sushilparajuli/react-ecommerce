import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
    return (
        <div className="input-group">
            <input className="input" {...otherProps} />
            {label && (
                <label
                    className={`${otherProps.value.length ? 'shrink' : ''} input-label`}
                >
                    {label}
                </label>
            )}
        </div>
    );
};

export default FormInput;
