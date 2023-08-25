import React from "react";
import styled from "styled-components";
import { IoEnterOutline } from "react-icons/io5";
import Input from "../../components/Input/Input";
import Register from "./Register";
import accountHooks from "../../hooks/acocuntHooks";

const HomeContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;

  .content-home {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;

    h1 {
      font-size: 3rem;
      font-weight: 400;
    }
    h3 {
      font-size: 1.5rem;
      font-weight: 400;
    }

    small {
      strong {
        cursor: pointer;
      }
    }

    .inputs-login {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      gap: 10px;
      margin-top: 30px;

      button {
        height: 50px;
        padding: 5px 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background: transparent;
        border: 1px solid var(--color-gray-1);
        transition: all 200ms ease-in-out;

        &:hover {
          background-color: var(--color-gray-1);
          color: var(--color-gray-4);
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);
        }
      }
    }
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 200px;
    gap: 30px;
    .content-home {
      h1 {
        font-size: 2.2rem;
      }

      h3 {
        font-size: 1.3rem;
      }

      .inputs-login {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
      }
    }
  }
`;

export default function Home() {
  const [needRegister, setNeedRegister] = React.useState(false);
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const account = accountHooks();

  return (
    <React.Fragment>
      <HomeContainer>
        <div className="content-home">
          <h1>Welcome to DashPay</h1>
          <h3>Put yours bills that you need pay here</h3>
          <div className="inputs-login">
            <Input
              labelText="Username"
              typeOfInput="text"  
              placeholder="user4231"
              nameOfInput="username"
              value={user}
              onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUser(e.target.value)
              }
              height="50px"
            />
            <Input
              labelText="Password"
              typeOfInput="password"
              placeholder="*******"
              nameOfInput="password"
              value={password}
              onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              height="50px"
            />
            <button onClick={() => account.loginUser(user, password)}>
              <IoEnterOutline size={25} />
            </button>
          </div>
          <small>
            Dont't have account?
            <strong onClick={() => setNeedRegister(!needRegister)}>
              {" "}
              Register-se here!
            </strong>
          </small>
        </div>
        {needRegister ? (
          <>
            <Register />
          </>
        ) : null}
      </HomeContainer>
    </React.Fragment>
  );
}
