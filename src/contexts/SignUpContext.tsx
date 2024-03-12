import { createContext, useState } from 'react'

const DEFAULT_VALUE: ISignUpContext = {
  username: '',
  password: '',
  repeatedPassword: '',
  email: '',
  setUsername: () => {},
  setEmail: () => {},
  setPassword: () => {},
  setRepeatedPassword: () => {},
}

export const SignUpContext = createContext(DEFAULT_VALUE)

export const SignUpProvider = ({ children }: IFatherProvider) => {
  const [username, setUsername] = useState<string>(DEFAULT_VALUE.username)
  const [email, setEmail] = useState<string>(DEFAULT_VALUE.email)
  const [password, setPassword] = useState<string>(DEFAULT_VALUE.password)
  const [repeatedPassword, setRepeatedPassword] = useState<string>(
    DEFAULT_VALUE.repeatedPassword,
  )

  return (
    <SignUpContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        repeatedPassword,
        setRepeatedPassword,
        email,
        setEmail,
      }}>
      {children}
    </SignUpContext.Provider>
  )
}
