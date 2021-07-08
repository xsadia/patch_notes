import { HTMLProps, useRef, useState } from "react";
import { InputContainer } from './styles';

interface InputProps extends HTMLProps<HTMLInputElement> {
  name: string;
}

export function Input({ name, ...rest }: InputProps) {
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleInputBlur() {
    setIsFilled(!!inputRef.current?.value);
  }

  return (
    <InputContainer isFilled={isFilled} >
      <input type="text" name={name} ref={inputRef} onBlur={handleInputBlur} {...rest} />
    </InputContainer>
  );
}