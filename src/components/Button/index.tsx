import { styled } from '@stitches/react'
import React from 'react'

const ButtonStyled = styled('button', {
  appearance: 'none',
  padding: '4px',
  borderRadius: '4px',
  backgroundColor: '#222',
  border: '1px solid #222',
  color: '#fff',
  fontSize: '1rem',
})

export const Button = React.forwardRef<
  HTMLButtonElement,
  { children: React.ReactNode }
>((props, ref) => {
  return (
    <ButtonStyled ref={ref} type="button">
      {props.children}
    </ButtonStyled>
  )
})
