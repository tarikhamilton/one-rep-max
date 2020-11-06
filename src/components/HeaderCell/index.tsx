import React, { FC } from 'react'

const HeaderCell: FC<any> = ({
  className = '',
  children,
}: {
  className?: string
  children: any
}) => <th className={`p-2 ${className}`}>{children}</th>

export default HeaderCell
