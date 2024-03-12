import { ActivityIndicator } from 'react-native'
import { useTheme } from '@react-navigation/native'

interface IAtomSpinner {
  size?: number | 'large' | 'small' | undefined
  color?: TColors
}

const AtomSpinner = ({ size, color }: IAtomSpinner) => {
  const { colors } = useTheme()
  const handleColor = colors[color ?? 'primary']

  return <ActivityIndicator size={size} color={handleColor} />
}

export default AtomSpinner
