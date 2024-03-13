import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native'
import AtomLabel from 'atoms/AtomLabel.tsx'
import { ButtonSize } from 'utils/sizeUtils.tsx'
import { useTheme } from '@react-navigation/native'

interface IMoleculeButton {
  text: string
  action: () => unknown
  size?: TButtonSize | undefined
  variation?: TButtonVariation | undefined
  disabled?: boolean
  color?: TColors
  rounded?: boolean
  customStyle?: ViewStyle
}

const MoleculeButton = ({
  text,
  action,
  size,
  variation,
  color,
  customStyle,
  disabled = false,
  rounded = false,
}: IMoleculeButton) => {
  const { colors } = useTheme()
  const handleColor = color ?? colors.primary

  const handleButtonVariation = (
    variationType: TButtonVariation | undefined,
  ) => {
    switch (variationType) {
      case 'solid':
        return {
          backgroundColor: handleColor,
          border: 0,
          elevation: 1,
        }
      case 'bordered':
        return {
          borderWidth: 1,
          borderColor: handleColor,
        }
      case 'plain':
      default:
        return {
          paddingHorizontal: 0,
          paddingVertical: 0,
        }
    }
  }

  const handleSize = (sizeType: TButtonSize | undefined) => {
    if (variation !== 'plain') {
      switch (sizeType) {
        case 'sm':
          return {
            paddingHorizontal: 18,
            paddingVertical: 6,
            marginVertical: 4,
          }
        case 'lg':
          return {
            paddingHorizontal: 34,
            paddingVertical: 12,
            marginVertical: 4,
          }
        default:
        case 'md':
          return {
            paddingHorizontal: 24,
            paddingVertical: 10,
            marginVertical: 4,
          }
      }
    }
  }

  return (
    <TouchableOpacity
      onPress={action}
      testID="moleculeButton"
      disabled={disabled}>
      <View
        style={[
          style.container,
          handleButtonVariation(variation),
          handleSize(size),
          customStyle,
          { borderRadius: rounded ? 50 : 8 },
        ]}>
        <AtomLabel
          text={text}
          size={ButtonSize(size)}
          color={variation === 'solid' ? colors.background : colors.primary}
          weight="bold"
        />
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default MoleculeButton
