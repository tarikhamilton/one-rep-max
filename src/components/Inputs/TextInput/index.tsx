import React, { FC } from 'react'
import { Input } from '../Input'

export const TextInput: FC<any> = ({ className, ...props }) => (
  <Input className={className} {...props} type="text" />
)

export default TextInput
