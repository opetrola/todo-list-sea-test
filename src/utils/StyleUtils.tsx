export const handleButtonVariation = (
  variation: TButtonvariation | undefined,
  colors: any,
) => {
  switch (variation) {
    case 'solid':
      return {
        backgroundColor: colors.primary,
        border: 0,
        elevation: 1,
      }
    case 'bordered':
      return {
        borderWidth: 1,
        borderColor: colors.border,
      }
    default:
      return {}
  }
}
