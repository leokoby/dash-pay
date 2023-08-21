import React from "react";
import styled from "styled-components";

type InputProps = {
  typeOfInput: string;
  nameOfInput: string;
  placeholder: string;
  onchange: React.ChangeEventHandler<HTMLInputElement>;
  value: string | number,
  inputMode?:string | undefined;
};

const InputComponent = styled.input`
  padding: 10px;
  border: 1px solid var(--color-gray-3);
  width: 100%;
  max-width: 250px;
  @media (max-width: 1000px) {
    max-width: unset;
  }
`;

export default function Input({
  typeOfInput,
  nameOfInput,
  placeholder,
  onchange,
  value,
  inputMode
}: InputProps) {
  return (
    <React.Fragment>
      <InputComponent
        type={typeOfInput}
        name={nameOfInput}
        placeholder={placeholder}
        onChange={onchange}
        value={value}
        inputMode={inputMode}
      />
    </React.Fragment>
  );
}
