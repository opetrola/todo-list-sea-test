import { StyleSheet, TextStyle, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import React, { ReactNode } from 'react'

interface IAtomCard {
  children: ReactNode
  rounded?: boolean
  customStyle?: TextStyle
}

const AtomCard = ({ children, rounded, customStyle }: IAtomCard) => {
  const { colors } = useTheme()

  return (
    <View
      style={[
        { backgroundColor: colors.card, borderRadius: rounded ? 100 : 10 },
        style.container,
        customStyle,
      ]}>
      {children}
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 5,
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'column',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
})

export default AtomCard
