import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import AuthScreen from 'screens/AuthScreen.tsx'
import { useTranslation } from 'react-i18next'

const Stack = createNativeStackNavigator()
const AuthNavigation = () => {
  const { t } = useTranslation('navigation')

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'AuthForm'}
        component={AuthScreen}
        options={{ title: t('auth') }}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigation
