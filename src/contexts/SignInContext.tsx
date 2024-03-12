import { createContext, useState } from 'react'

const DEFAULT_VALUE: ISignInContext = {
  email: '',
  password: '',
  setEmail: () => {},
  setPassword: () => {},
}

export const SignInContext = createContext(DEFAULT_VALUE)

export const SignInProvider = ({ children }: IFatherProvider) => {
  const [email, setEmail] = useState<string>(DEFAULT_VALUE.email)
  const [password, setPassword] = useState<string>(DEFAULT_VALUE.password)

  return (
    <SignInContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
      }}>
      {children}
    </SignInContext.Provider>
  )
}
