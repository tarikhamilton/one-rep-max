import React, { FC } from 'react'
import { ITableCellProps } from '../interfaces/TableCell.interface'

export const Cell: FC<ITableCellProps> = ({ className = '', children }) => (
  <td className={`p-2 text-gray-800 ${className}`}>{children}</td>
)

export default Cell
