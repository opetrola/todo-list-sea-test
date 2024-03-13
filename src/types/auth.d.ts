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

  type IUserContext = {
    username: string
    uid: string
    email: string
    error: string
    setUsername: Dispatch<SetStateAction<string>>
    setEmail: Dispatch<SetStateAction<string>>
    setUid: Dispatch<SetStateAction<string>>
    setError: Dispatch<SetStateAction<string>>
  }

  type ICommonContext = {
    loading: boolean
    setLoading: Dispatch<SetStateAction<boolean>>
  }
}
