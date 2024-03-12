import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { handleSizes } from '@utils/sizeUtils.tsx'
import { useTheme } from '@react-navigation/native'

interface IAtomIconButton {
  onPress?: ((event: GestureResponderEvent) => void) | undefined
  name: string
  size?: TSizes
  color?: TColors | undefined | string
  disabled?: boolean
}

const MoleculeIconButton = ({
  onPress,
  name,
  color,
  size = 'lg',
  disabled = false,
}: IAtomIconButton) => {
  const { colors } = useTheme()
  const handleColor = color ?? colors.primary

  return (
    <TouchableOpacity
      disabled={disabled}
      testID="moleculeIconButton"
      onPress={onPress}>
      <Icon
        color={handleColor}
        style={style.iconStyle}
        name={name}
        size={handleSizes(size)}
      />
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  iconStyle: {
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
})

export default MoleculeIconButton
