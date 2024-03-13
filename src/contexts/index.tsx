import { SignInProvider } from 'contexts/SignInContext.tsx'
import { SignUpProvider } from 'contexts/SignUpContext.tsx'
import { UserProvider } from 'contexts/UserContext.tsx'
import { CommonProvider } from 'contexts/CommonContext.tsx'

export const ContextProvider = ({ children }: IFatherProvider) => {
  return (
    <SignInProvider>
      <UserProvider>
        <CommonProvider>
          <SignUpProvider>{children}</SignUpProvider>
        </CommonProvider>
      </UserProvider>
    </SignInProvider>
  )
}
