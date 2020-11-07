import React, { FC } from 'react'
import { Input } from '../Input'

export const NumberInput: FC<any> = ({ className, ...props }) => (
  <Input className={className} {...props} type="number" />
)

export default NumberInput
