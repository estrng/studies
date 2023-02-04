import React from 'react'
import { Container, Icon } from './styles'

interface LocatinProps {
  children?: React.ReactNode;
  city: string;
}

export function Location({ city, children }: LocatinProps) {
  return (
    <Container>
      <Icon />
      {city ? city : children}
    </Container>
  )
}
