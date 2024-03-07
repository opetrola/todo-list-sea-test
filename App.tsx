/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'

// Screens
import HomeScreen from '@screens/HomeScreen.tsx'
import SettingsScreen from '@screens/SettingsScreen.tsx'

// i18n
import { useTranslation } from 'react-i18next'

// Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { ContextProvider } from 'contexts'
import ScheduleScreen from 'screens/ScheduleScreen.tsx'

const Tab = createBottomTabNavigator()

function App(): React.JSX.Element {
  const { t } = useTranslation('common')

  return (
    <ContextProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: t('home'),
            }}
          />
          <Tab.Screen
            name="Schedule"
            component={ScheduleScreen}
            options={{
              title: t('schedule'),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              title: t('settings'),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ContextProvider>
  )
}

export default App
