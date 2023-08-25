import React from "react";
import styled from "styled-components";

type InputProps = {
  typeOfInput: string;
  nameOfInput: string;
  placeholder: string;
  onchange: React.ChangeEventHandler<HTMLInputElement>;
  value: string | number,
  inputMode?:string | undefined;
  labelText?: string
  width?: string
  height?: string
  maxWidth?: string
};

const LabelText = styled.label`
  width: 100%;
  max-width: 250px;
  font-size: 0.8rem;
  @media (max-width: 1000px) {
    font-size: 0.8rem;
  }
  `;
const InputComponent = styled.input<{
  $widthInput?: string, 
  $heigthInput?: string,
  $maxWidth?: string
  }>`
  padding: 10px;
  border: 1px solid var(--color-gray-3);
  width:${props => props.$widthInput || "100%"};;
  max-width: ${props => props.$maxWidth || "250px"};
  height: ${props => props.$heigthInput || "100%"};;
  margin-top: 3px;
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
  inputMode,
  labelText,
  width,
  height,
  maxWidth
}: InputProps) {
  return (
    <React.Fragment>
      <LabelText>
        {labelText}
        <InputComponent
          type={typeOfInput}
          name={nameOfInput}
          placeholder={placeholder}
          onChange={onchange}
          value={value}
          inputMode={inputMode}
          $widthInput={width}
          $heigthInput={height}
          $maxWidth={maxWidth}
        />
      </LabelText>
    </React.Fragment>
  );
}
