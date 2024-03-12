import { Dispatch, SetStateAction } from 'react'

declare global {
  type ISignInContext = {
    email: string
    password: string
    setEmail: Dispatch<SetStateAction<string>>
    setPassword: Dispatch<SetStateAction<string>>
  }

  type ISignUpContext = {
    username: string
    password: string
    email: string
    repeatedPassword: string
    setUsername: Dispatch<SetStateAction<string>>
    setEmail: Dispatch<SetStateAction<string>>
    setPassword: Dispatch<SetStateAction<string>>
    setRepeatedPassword: Dispatch<SetStateAction<string>>
  }
}
