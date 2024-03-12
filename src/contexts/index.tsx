import { SignInProvider } from '@contexts/SignInContext.tsx'
import { SignUpProvider } from '@contexts/SignUpContext.tsx'

export const ContextProvider = ({ children }: IFatherProvider) => {
  return (
    <SignInProvider>
      <SignUpProvider>{children}</SignUpProvider>
    </SignInProvider>
  )
}
