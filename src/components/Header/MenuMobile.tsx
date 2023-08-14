import React from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { styled } from "styled-components";

const ButtonMenu = styled.button`
  background: transparent;
  border: 0;
`

const MenuContainer = styled.div`
  width: 50vw;
  height: 100vh;  
  background: var(--color-gray-4);
  position: absolute;
  top: 0;
  right: 0;
  animation: showMenu 200ms ease-in-out;


  span{
    position: absolute;
    top: 20px;
    right: 10px;
  }

  ul{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    li{
      margin: 0 0 30px 0;
      a{
        font-size: 1.3rem;
        font-weight: 500;
      }
    }

    @keyframes showMenu {
      from{
        opacity:0;
        transform: translateX(300px);
      } to {
        opacity: 1;
      } 
    }
  }
`

export default function MenuMobile() {
  const [isOpen, setIsOpen] = React.useState(false)
  
  const handleMenu = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }
  return (
    <>
      <ButtonMenu onClick={handleMenu}>
        <FaBars size={20} />
      </ButtonMenu>
      {isOpen ? (
        <MenuContainer>
          <span onClick={handleMenu}>
            <MdClose size={30}/> 
          </span>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </MenuContainer>
      ) : null}
    </>
  );
}
