import { ReactNode } from 'react'
import { Title } from './styles'

interface SnakeTitleProps {
  children: ReactNode
}
export function SnakeTitle({ children }: SnakeTitleProps) {
  return <Title>{children}</Title>
}
