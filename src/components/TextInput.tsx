import React from 'react'

const TextInput = ({ className, ...props }: any) => (
  <input
    className={`inline-block p-2 w-full bg-gray-300 text-gray-900 rounded-lg ${className}`}
    {...props}
  />
)

export default TextInput
