import { createContext, useState } from 'react'

const DEFAULT_VALUE: IUserContext = {
  uid: '',
  username: '',
  email: '',
  error: '',
  setUsername: () => {},
  setEmail: () => {},
  setUid: () => {},
  setError: () => {},
}

export const UserContext = createContext(DEFAULT_VALUE)

export const UserProvider = ({ children }: IFatherProvider) => {
  const [username, setUsername] = useState<string>(DEFAULT_VALUE.username)
  const [email, setEmail] = useState<string>(DEFAULT_VALUE.email)
  const [uid, setUid] = useState<string>(DEFAULT_VALUE.uid)
  const [error, setError] = useState<string>(DEFAULT_VALUE.error)

  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        uid,
        setUid,
        error,
        setError,
        email,
        setEmail,
      }}>
      {children}
    </UserContext.Provider>
  )
}
