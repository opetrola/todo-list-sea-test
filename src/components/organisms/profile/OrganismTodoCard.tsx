import { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'

import AtomCard from 'atoms/AtomCard.tsx'
import { useTheme } from '@react-navigation/native'

interface IOrganismTodoCard {
  color?: TColors
  children: ReactNode
}

const OrganismTodoCard = ({ color, children }: IOrganismTodoCard) => {
  const { colors } = useTheme()

  return (
    <AtomCard
      customStyle={{
        borderLeftWidth: 4,
        borderColor: color ?? colors.primary,
      }}>
      <View style={style.container}>{children}</View>
    </AtomCard>
  )
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})

export default OrganismTodoCard
