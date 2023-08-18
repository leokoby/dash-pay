import React from 'react'
import styled from 'styled-components';

const ModalContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 300px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  border: 1px solid var(--color-gray-3);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`


type ModalProps = {
  children?: React.ReactNode,
  title?: string,
  smallText?: string
}

export default function Modal({children, title = 'Modal Title', smallText = 'Description text'}: ModalProps) {
  return (
    <React.Fragment>
      <div></div>
      <ModalContainer>
        <h3>{title}</h3>
        <p>{smallText}</p>
        <div>
          {children}
        </div>
      </ModalContainer>
    </React.Fragment>
  )
}
