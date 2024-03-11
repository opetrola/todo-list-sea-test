declare interface IFatherProvider {
  children: ReactNode
}

declare interface TTabBarIconProps {
  focused: boolean
}

declare type TSizes = 'ssm' | 'sm' | 'md' | 'lg' | 'xlg' | 'xxlg'
declare type TButtonSize = 'sm' | 'md' | 'lg'
declare type TButtonVariation = 'solid' | 'bordered' | 'plain'

declare type TColors =
  | 'primary'
  | 'background'
  | 'card'
  | 'text'
  | 'border'
  | 'notification'
