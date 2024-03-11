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
  color?: TColors | undefined
}

const MoleculeIconButton = ({
  onPress,
  name,
  color,
  size = 'lg',
}: IAtomIconButton) => {
  const { colors } = useTheme()

  const handleColor = colors[color ?? 'text']

  return (
    <TouchableOpacity onPress={onPress}>
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
