import { ReactNode } from 'react'

declare global {
  interface IFatherProvider {
    children: ReactNode
  }
}
