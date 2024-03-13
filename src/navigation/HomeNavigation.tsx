import React, { useContext, useEffect } from 'react'
import Icons from 'react-native-vector-icons/MaterialIcons'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Screens
import TodosScreens from 'screens/home/TodosScreens.tsx'
import ScheduleScreen from 'screens/home/ScheduleScreen.tsx'
import ProfileScreen from 'screens/home/ProfileScreen.tsx'
import { UserContext } from 'contexts/UserContext.tsx'

const Tab = createBottomTabNavigator()

const tabOptions = (title: string, iconName: string, color: string) => {
  return {
    title,
    headerShown: false,
    tabBarIcon: ({ focused }: TTabBarIconProps) => (
      <Icons name={iconName} size={30} color={focused ? color : 'grey'} />
    ),
  }
}

const HomeNavigation = ({ route }: INavigationScreen) => {
  const { t } = useTranslation('navigation')
  const { colors } = useTheme()
  const { username: name, error, uid, email } = route.params.user

  const { setUsername, setEmail, setUid, setError, username } =
    useContext(UserContext)

  useEffect(() => {
    setUsername(name)
    setError(error)
    setUid(uid)
    setEmail(email)
  }, [email, error, name, setEmail, setError, setUid, setUsername, uid])

  return (
    <Tab.Navigator>
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
        name={'Profile'}
        component={ProfileScreen}
        options={{
          ...tabOptions(t('profile'), 'supervised-user-circle', colors.primary),
          headerShown: true,
        }}
      />
    </Tab.Navigator>
  )
}

export default HomeNavigation
