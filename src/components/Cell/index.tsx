import React, { FC } from 'react'

const Cell: FC<any> = ({
  className = '',
  children,
}: {
  className?: string
  children: any
}) => <td className={`p-2 ${className}`}>{children}</td>

export default Cell
