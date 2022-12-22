import { Input, InputGroup, InputLabel } from './form-input.styles';
import { InputHTMLAttributes, FC } from 'react';

type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <InputGroup>
      <Input  {...otherProps} />
      {label && (
        <InputLabel shrink={Boolean(
          otherProps.value && 
          typeof otherProps.value === 'string' && 
          otherProps.value.length)}>
          {label}
        </InputLabel>
      )}
    </InputGroup>
  );
};

export default FormInput;
