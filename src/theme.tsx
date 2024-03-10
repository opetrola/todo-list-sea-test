import { DefaultTheme } from '@react-navigation/native'

export const TodoListTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    secondary: 'rgb(234, 41, 159)',
    tertiary: 'rgb(159, 88, 218)',

    notification: 'rgb(255, 69, 58)',
    info: 'rgb(0, 118, 241)',
    success: 'rgb(0, 165, 68)',
    warning: 'rgb(248, 146, 54)',

    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
  },
}
