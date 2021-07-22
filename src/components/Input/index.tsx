import { HTMLProps, useRef, useState } from "react";
import { FieldError } from "react-hook-form";
import { InputContainer, ErrorMessage } from './styles';

interface InputProps extends HTMLProps<HTMLInputElement> {
  name: string;
  error?: FieldError;
}

export function Input({ name, error, ...rest }: InputProps) {
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleInputBlur() {
    setIsFilled(!!inputRef.current?.value);
  }

  return (
    <InputContainer isFilled={isFilled} isErrored={!!error} >
      <input type="text" name={name} ref={inputRef} onBlur={handleInputBlur}  {...rest} />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </InputContainer>
  );
}