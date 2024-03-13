import React from 'react'
import { useTranslation } from 'react-i18next'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import AuthScreen from 'screens/auth/AuthScreen.tsx'
import SignUpScreen from 'screens/auth/SignUpScreen.tsx'
import EmailSignInScreen from 'screens/auth/EmailSignInScreen.tsx'

const Stack = createNativeStackNavigator()

const AuthNavigation = () => {
  const { t } = useTranslation('navigation')

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'AuthForm'}
        component={AuthScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={'SignUpForm'}
        component={SignUpScreen}
        options={{ title: t('sign_up') }}
      />

      <Stack.Screen
        name={'EmailSignInForm'}
        component={EmailSignInScreen}
        options={{ title: t('sign_in') }}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigation
