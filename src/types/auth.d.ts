import { Dispatch, SetStateAction } from 'react'

declare global {
  type ILoginContext = {
    username: String
    password: String
    setUsername: Dispatch<SetStateAction<String>>
    setPassword: Dispatch<SetStateAction<String>>
  }
}
