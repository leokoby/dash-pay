import React from "react";
import Input from "../../components/Input/Input";
import { styled } from "styled-components";

import acocuntHooks from "../../hooks/acocuntHooks";

const RegisterComponent = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #fff;
  animation: show 400ms ease-in-out;
  box-shadow: 4px 10px 10px rgba(0, 0, 0, 0.36);

  h3 {
    font-weight: 500;
    margin-bottom: 10px;
  }

  .gp-inputs {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 10px;
    column-gap: 10px;
    margin: 20px 0;
  }

  button {
    padding: 10px 0;
    background: var(--color-gray-4);
    color: var(--color-gray-1);
    border: 1px solid var(--color-gray-3);
    font-weight: 500;
    transition: all 200ms ease-in-out;
    cursor: pointer;

    &:hover {
      background: var(--color-gray-1);
      color: var(--color-gray-4);
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);
      border-color: var(--color-gray-1);
    }
  }

  @media (max-width: 500px) {
    .gp-inputs {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @keyframes show {
    from {
      opacity: 0;
      transform: translateY(-100%);
    }
    to {
      opacity: 1;
    }
  }
`;

export default function Register() {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const account = acocuntHooks();

  const handleSubmit = () => {
    if(user && email && password !== ''){
      console.log("Have info")
      return account.registerUser(user, email, password);
    }
    console.log("Haven`t info")
  };

  return (
    <RegisterComponent>
      <h3>Register</h3>
      <small>Fill in the fields below to register your account</small>
      <div className="gp-inputs">
        <Input
          typeOfInput="text"
          placeholder="username"
          nameOfInput="username"
          value={user}
          onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUser(e.target.value)
          }
        />
        <Input
          typeOfInput="email"
          placeholder="email"
          nameOfInput="email"
          value={email}
          onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <Input
          typeOfInput="password"
          placeholder="password"
          nameOfInput="password"
          value={password}
          onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <Input
          typeOfInput="password"
          placeholder="confirm password"
          nameOfInput="confirmPassword"
          value={confirmPassword}
          onchange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(e.target.value)
          }
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Register
      </button>
    </RegisterComponent>
  );
}
