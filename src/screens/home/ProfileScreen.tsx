import {
  Alert,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import OrganismProfileCard from 'organisms/profile/OrganismProfileCard.tsx'
import OrganismTodoCard from 'organisms/profile/OrganismTodoCard.tsx'
import AtomLabel from 'atoms/AtomLabel.tsx'

import { onSignOut } from 'firebase_service/auth.ts'
import OrganismProfileOptionsCard from 'organisms/profile/OrganismProfileOptionsCard.tsx'

const ProfileScreen = ({ navigation }: INavigationScreen) => {
  const { t } = useTranslation('common')
  const { colors } = useTheme()

  const signOut = (title: string, message: string) =>
    Alert.alert(title, message, [
      {
        text: t('cancel'),
        style: 'cancel',
      },
      {
        text: t('exit'),
        onPress: () =>
          onSignOut(
            () => {
              navigation.navigate('Auth')
            },
            () => {},
          ),
      },
    ])

  return (
    <View style={style.container}>
      <ScrollView style={style.scrollView}>
        <OrganismProfileCard />

        <OrganismProfileOptionsCard />

        <TouchableOpacity
          onPress={() => signOut(t('exit_app'), t('realy_want_to_exit'))}>
          <OrganismTodoCard>
            <Icon name="exit-to-app" size={30} color={colors.primary} />
            <AtomLabel
              customStyle={{ marginLeft: 10 }}
              text={t('exit_app')}
              weight="400"
            />
          </OrganismTodoCard>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  scrollView: {
    paddingHorizontal: 5,
    paddingTop: 16,
  },
})
export default ProfileScreen
