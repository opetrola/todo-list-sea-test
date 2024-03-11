import { Text, TextStyle } from 'react-native'
import { handleSizes } from '@utils/sizeUtils.tsx'
import { useTheme } from '@react-navigation/native'

interface IAtomLabel {
  text: string
  size?: TSizes | undefined
  weight?: 'normal' | 'bold' | '100' | '400' | '600'
  color?: TColors | undefined | string
  uppercase?: boolean
  customStyle?: TextStyle
  subtitle?: boolean
}

const AtomLabel = ({
  text,
  size,
  weight,
  color,
  uppercase,
  customStyle,
  subtitle,
}: IAtomLabel) => {
  const { colors } = useTheme()

  const handleColors = () => {
    if (color) {
      return color
    }

    if (subtitle) {
      return 'rgb(160, 160, 160)'
    }

    return colors.text
  }

  return (
    <Text
      testID="atomLabel"
      style={[
        customStyle,
        {
          fontSize: handleSizes(size),
          fontWeight: weight ?? 'normal',
          color: handleColors(),
          textTransform: uppercase ? 'uppercase' : 'none',
        },
      ]}>
      {text}
    </Text>
  )
}

export default AtomLabel
