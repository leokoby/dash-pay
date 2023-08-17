import React from 'react'

type ModalProps = {
  children: React.ReactNode,
  title: string,
  smallText: string
}

export default function Modal({children, title = 'Modal Title', smallText = 'Description text'}: ModalProps) {
  return (
    <React.Fragment>
      <div></div>
      <div>
        <h3>{title}</h3>
        <p>{smallText}</p>
        <div>
          {children}
        </div>
      </div>
    </React.Fragment>
  )
}
