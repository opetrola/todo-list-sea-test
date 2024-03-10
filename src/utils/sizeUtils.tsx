export const handleSizes = (size: TSizes): number => {
  switch (size) {
    case 'ssm':
      return 12
    case 'sm':
      return 14
    case 'md':
      return 18
    case 'lg':
      return 22
    case 'xlg':
      return 26
    case 'xxlg':
      return 30
  }
}

type TReturnButtonSize = 'sm' | 'md'

export const ButtonSize = (
  size: TButtonSize | undefined,
): TReturnButtonSize => {
  switch (size) {
    case 'sm':
      return 'sm'
    default:
      return 'md'
  }
}
