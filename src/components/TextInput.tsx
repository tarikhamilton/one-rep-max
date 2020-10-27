import React, { FC } from 'react'

const TextInput: FC<any> = ({ className, ...props }: any) => (
  <input
    className={`inline-block p-2 w-full bg-gray-300 text-gray-900 rounded-lg ${className}`}
    {...props}
  />
)

export default TextInput
