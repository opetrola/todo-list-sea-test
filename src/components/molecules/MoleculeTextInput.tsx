import { Dispatch, SetStateAction } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import AtomLabel from 'atoms/AtomLabel.tsx'

interface IAtomTextInput {
  label: string
  placeholder?: string
  value: string
  onChangeText: Dispatch<SetStateAction<string>>
  color?: TColors
  variation?: TButtonVariation | undefined
  rounded?: boolean
  security?: boolean
}

const MoleculeTextInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  color,
  variation,
  rounded = false,
  security = false,
}: IAtomTextInput) => {
  const { colors } = useTheme()
  const handleColor = color ?? colors.primary

  const handleInputVariation = (
    variationType: TButtonVariation | undefined,
  ) => {
    switch (variationType) {
      case 'solid':
        return {
          backgroundColor: colors.background,
          color: handleColor,
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
        return {}
    }
  }

  return (
    <>
      <AtomLabel
        customStyle={style.labelStyle}
        weight="200"
        text={label}
        size="ssm"
      />

      <View
        style={[
          style.container,
          handleInputVariation(variation),
          { borderColor: colors.border, borderRadius: rounded ? 50 : 8 },
        ]}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          autoCapitalize="none"
          secureTextEntry={security}
        />
      </View>
    </>
  )
}

const style = StyleSheet.create({
  container: {
    height: 45,
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'stretch',
    justifyContent: 'center',
    marginBottom: 10,
  },
  labelStyle: {
    marginBottom: 4,
    marginLeft: 18,
  },
})

export default MoleculeTextInput
