import React from 'react'

const Cell = ({
  className = '',
  children,
}: {
  className?: string
  children: any
}) => <td className={`p-2 ${className}`}>{children}</td>

export default Cell
