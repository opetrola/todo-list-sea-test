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
