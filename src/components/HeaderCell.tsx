import React from 'react'

const HeaderCell = ({
  className = '',
  children,
}: {
  className?: string
  children: any
}) => <th className={`p-2 ${className}`}>{children}</th>

export default HeaderCell
