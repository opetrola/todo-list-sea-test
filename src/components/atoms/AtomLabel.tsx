import { Text } from 'react-native'
import { handleSizes } from 'utils/fontUtils.tsx'

interface IAtomLabel {
  text: string
  size: TSizes
  weight?: 'normal' | 'bold'
}

const AtomLabel = ({ text, size, weight }: IAtomLabel) => {
  return (
    <Text
      style={{ fontSize: handleSizes(size), fontWeight: weight ?? 'normal' }}>
      {text}
    </Text>
  )
}

export default AtomLabel
