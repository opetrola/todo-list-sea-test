import React from 'react'
import Icons from 'react-native-vector-icons/MaterialIcons'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Screens
import TodosScreens from '@screens/TodosScreens.tsx'
import ScheduleScreen from '@screens/ScheduleScreen.tsx'
import SettingsScreen from '@screens/SettingsScreen.tsx'
import ProfileScreen from '@screens/ProfileScreen.tsx'

const Tab = createBottomTabNavigator()

const tabOptions = (title: string, iconName: string, color: string) => {
  return {
    title,
    header: () => null,
    tabBarIcon: ({ focused }: TTabBarIconProps) => (
      <Icons name={iconName} size={30} color={focused ? color : 'grey'} />
    ),
  }
}

const HomeNavigation = () => {
  const { t } = useTranslation('navigation')
  const { colors } = useTheme()

  const ScreenOptions = {
    tabBarStyle: {
      paddingTop: 8,
      height: 90,
    },
    tabBarLabelStyle: {
      fontSize: 12,
    },
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: 'grey',
  }

  return (
    <Tab.Navigator screenOptions={ScreenOptions}>
      <Tab.Screen
        name={'Todo'}
        component={TodosScreens}
        options={() => tabOptions(t('todos'), 'checklist', colors.primary)}
      />
      <Tab.Screen
        name={'Schedule'}
        component={ScheduleScreen}
        options={() =>
          tabOptions(t('schedule'), 'calendar-month', colors.primary)
        }
      />
      <Tab.Screen
        name={'Settings'}
        component={SettingsScreen}
        options={() => tabOptions(t('settings'), 'settings', colors.primary)}
      />
      <Tab.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={() =>
          tabOptions(t('profile'), 'supervised-user-circle', colors.primary)
        }
      />
    </Tab.Navigator>
  )
}

export default HomeNavigation
