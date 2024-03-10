import { Text } from 'react-native'
import { handleSizes } from '@utils/sizeUtils.tsx'
import { useTheme } from '@react-navigation/native'

interface IAtomLabel {
  text: string
  size: TSizes
  weight?: 'normal' | 'bold'
}

const AtomLabel = ({ text, size, weight }: IAtomLabel) => {
  const { colors } = useTheme()

  return (
    <Text
      style={{
        fontSize: handleSizes(size),
        fontWeight: weight ?? 'normal',
        color: colors.text,
      }}>
      {text}
    </Text>
  )
}

export default AtomLabel
