import React from 'react'

// Navigation
import { NavigationContainer } from '@react-navigation/native'
import { ContextProvider } from 'contexts'

// Enums
import { TodoListTheme } from 'theme.tsx'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeNavigation from 'Navigation/HomeNavigation.tsx'
import AuthNavigation from 'Navigation/AuthNavigation.tsx'

const Stack = createNativeStackNavigator()

function App(): React.JSX.Element {
  return (
    <ContextProvider>
      <NavigationContainer theme={TodoListTheme}>
        <Stack.Navigator screenOptions={{ header: () => null }}>
          <Stack.Screen name={'Auth'} component={AuthNavigation} />
          <Stack.Screen name={'Home'} component={HomeNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  )
}

export default App
