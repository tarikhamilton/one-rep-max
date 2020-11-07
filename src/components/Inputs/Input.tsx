import React, { FC } from 'react'

export const Input: FC<any> = ({ className, ...props }) => (
  <input
    className={`inline-block p-2 w-full bg-gray-300 text-gray-900 rounded-lg ${className}`}
    {...props}
  />
)

export default Input
