import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'

import AtomCard from 'atoms/AtomCard.tsx'
import AtomLabel from 'atoms/AtomLabel.tsx'
import { UserContext } from 'contexts/UserContext.tsx'

import Icon from 'react-native-vector-icons/FontAwesome'
import { useTheme } from '@react-navigation/native'

const OrganismProfileCard = () => {
  const { email, username, uid } = useContext(UserContext)
  const { colors } = useTheme()

  return (
    <AtomCard>
      <View style={style.profileContainer}>
        <View style={[{ backgroundColor: colors.primary }, style.avatar]}>
          <Icon name="user-circle-o" size={38} color={colors.card} />
        </View>

        <View style={style.welcome}>
          <AtomLabel text={username ?? uid} size="md" weight="600" />

          <AtomLabel text={email} size="ssm" subtitle />
        </View>
      </View>
    </AtomCard>
  )
}

const style = StyleSheet.create({
  avatar: {
    borderRadius: 50,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  profileContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  welcome: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
})

export default OrganismProfileCard
