import React from 'react'
import Input from './Input'

const NumberInput = ({ className, ...props }: any) => (
  <Input className={className} {...props} type="text" />
)

export default NumberInput
