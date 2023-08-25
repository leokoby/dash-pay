import React from 'react'
import styled from 'styled-components';

const ModalContainer = styled.div`
  width: 100%;
  max-width: 300px;
  min-height: 300px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  border: 1px solid var(--color-gray-3);
  position: fixed;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h3{
    font-size: 1.2rem;
    font-weight: 500;
  }

  p{
    text-align: center;
    font-size: 1rem;
    color: var(--color-gray-2);
    margin-top: 10px;
  }

  `

const ChildrenWrapperContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 1.1rem;
`

const OverlayModal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1;
  background: var(--color-gray-3);
  opacity: 0.3;
  top: 0;
  left: 0;
`


type ModalProps = {
  children?: React.ReactNode,
  title?: string,
  smallText?: string,
  setOpenModal: () => void
}

export default function Modal({children, title = 'Modal Title', smallText = 'Description text', setOpenModal}: ModalProps) {
  return (
    <React.Fragment>
      <OverlayModal onClick={setOpenModal}/>
      <ModalContainer>
        <h3>{title}</h3>
        <p>{smallText}</p>
        <ChildrenWrapperContainer>
          {children}
        </ChildrenWrapperContainer>
      </ModalContainer>
    </React.Fragment>
  )
}
