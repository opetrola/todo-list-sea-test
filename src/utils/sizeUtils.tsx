export const handleSizes = (size: TSizes | undefined): number => {
  switch (size) {
    case 'ssm':
      return 16
    case 'sm':
      return 18
    case 'md':
      return 26
    case 'lg':
      return 30
    case 'xlg':
      return 40
    case 'xxlg':
      return 46
    default:
      return 18
  }
}

type TReturnButtonSize = 'sm' | 'md' | 'lg'

export const ButtonSize = (
  size: TButtonSize | undefined,
): TReturnButtonSize => {
  switch (size) {
    case 'sm':
      return 'sm'
    case 'md':
      return 'md'
    default:
      return 'lg'
  }
}
