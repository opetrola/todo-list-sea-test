import React from 'react'
import { ContextProvider } from '@contexts/index.tsx'
import { TodoListTheme } from '@src/theme.tsx'

// navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import HomeNavigation from '@navigation/HomeNavigation.tsx'
import AuthNavigation from '@navigation/AuthNavigation.tsx'

const Stack = createNativeStackNavigator()

function App(): React.JSX.Element {
  return (
    <ContextProvider>
      <NavigationContainer theme={TodoListTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={'Auth'} component={AuthNavigation} />
          <Stack.Screen name={'Home'} component={HomeNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  )
}

export default App
