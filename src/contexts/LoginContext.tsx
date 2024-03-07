import { createContext, useState } from 'react'

const DEFAULT_VALUE: ILoginContext = {
  username: '',
  password: '',
  setUsername: () => {},
  setPassword: () => {},
}

export const LoginContext = createContext(DEFAULT_VALUE)

export const LoginProvider = ({ children }: IFatherProvider) => {
  const [username, setUsername] = useState<String>(DEFAULT_VALUE.username)
  const [password, setPassword] = useState<String>(DEFAULT_VALUE.password)

  return (
    <LoginContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
      }}>
      {children}
    </LoginContext.Provider>
  )
}
