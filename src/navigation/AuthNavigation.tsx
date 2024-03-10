import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTranslation } from 'react-i18next'

// Screens
import AuthScreen from '@screens/AuthScreen.tsx'

const Stack = createNativeStackNavigator()
const AuthNavigation = () => {
  const { t } = useTranslation('navigation')

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'AuthForm'}
        component={AuthScreen}
        options={{ title: t('auth'), header: () => null }}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigation
