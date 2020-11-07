import classNames from 'classnames'
import React, { FC } from 'react'
import { ITableCellProps } from '../interfaces/TableCell.interface'

export const Cell: FC<ITableCellProps> = ({
  className = '',
  children,
  editing = false,
}) => (
  <td
    className={classNames(
      editing ? 'p-2' : 'p-4',
      `bg-white ${className}`
    )}
  >
    {children}
  </td>
)

export default Cell
