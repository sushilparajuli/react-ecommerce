import { Input, InputGroup, InputLabel } from './form-input.styles.jsx';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <InputGroup>
      <Input  {...otherProps} />
      {label && (
        <InputLabel shrink={otherProps.value.length}>
          {label}
        </InputLabel>
      )}
    </InputGroup>
  );
};

export default FormInput;
