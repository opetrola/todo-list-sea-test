import { createContext, useState } from 'react'

const DEFAULT_VALUE: ICommonContext = {
  loading: false,
  setLoading: () => {},
}

export const CommonContext = createContext(DEFAULT_VALUE)

export const CommonProvider = ({ children }: IFatherProvider) => {
  const [loading, setLoading] = useState<boolean>(DEFAULT_VALUE.loading)

  return (
    <CommonContext.Provider
      value={{
        loading,
        setLoading,
      }}>
      {children}
    </CommonContext.Provider>
  )
}
