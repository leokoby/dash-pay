import React from 'react'

function acocuntHooks() {
 
  const loginUser = (user: string, password: string) => {
    console.log("LOGIN: ", user, password)
  }

  const registerUser = (user: string, email: string, password: string) => {
    console.log("CADASTRO: ", user, password, email)
  }
 
  return {
    loginUser,
    registerUser
  }
}

export default acocuntHooks;