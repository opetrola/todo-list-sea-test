import { StyleSheet, TouchableOpacity, View } from 'react-native'
import AtomLabel from '@atoms/AtomLabel.tsx'
import { ButtonSize } from '@utils/sizeUtils.tsx'
import { useTheme } from '@react-navigation/native'
import { handleButtonVariation } from '@utils/StyleUtils.tsx'

interface IMoleculeButton {
  text: string
  action: () => unknown
  size?: TButtonSize
  variation?: TButtonvariation | undefined
}

const MoleculeButton = ({ text, action, size, variation }: IMoleculeButton) => {
  const { colors } = useTheme()

  return (
    <TouchableOpacity onPress={action}>
      <View style={[style.container, handleButtonVariation(variation, colors)]}>
        <AtomLabel text={text} size={ButtonSize(size)} />
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  container: {
    padding: 4,
    borderRadius: 8,
  },
})

export default MoleculeButton
