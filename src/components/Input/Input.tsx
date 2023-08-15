import React from "react";
import styled from "styled-components";

type InputProps = {
  typeOfInput: string;
  nameOfInput: string;
  placeholder: string;
  onChange?: () => void;
};

const InputComponent = styled.input`
  padding: 10px;
  border: 1px solid var(--color-gray-3);
`;

export default function Input({
  typeOfInput,
  nameOfInput,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <React.Fragment>
      <InputComponent
        type={typeOfInput}
        name={nameOfInput}
        placeholder={placeholder}
        onChange={() => onChange}
      />
    </React.Fragment>
  );
}
