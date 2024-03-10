import { LoginProvider } from '@contexts/LoginContext.tsx'

export const ContextProvider = ({ children }: IFatherProvider) => {
  return <LoginProvider>{children}</LoginProvider>
}
