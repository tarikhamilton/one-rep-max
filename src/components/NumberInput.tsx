import React from 'react'

const NumberInput = ({ className, ...props }: any) => (
  <input
    type="number"
    className={`inline-block p-2 w-full bg-gray-300 text-gray-900 rounded-lg ${className}`}
    {...props}
  />
)

export default NumberInput
