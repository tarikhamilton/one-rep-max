import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import React, { FC } from 'react'

export interface CircleButtonProps {
  backgroundColor?: string
  depressed?: boolean
  size?: 'sm' | '2x' | '3x'
  onClick?: () => void
  title?: string
  variant?: 'cancel' | 'default' | 'error' | 'warning' | 'success'
  icon?: IconProp
  children?: any
}

export const bgColors: any = {
  error: 'bg-red-400',
  default: 'bg-purple-400',
  success: 'bg-green-400',
  cancel: 'bg-gray-400',
}

export const CircleButton: FC<CircleButtonProps> = ({
  depressed = false,
  icon,
  size = '2x',
  title,
  variant = 'default',
  ...props
}) => (
  <div
    className={classNames(
      'inline-block relative p-8 m-2 rounded-full cursor-pointer text-white text-sm font-bold uppercase',
      depressed ? 'shadow-none' : 'shadow',
      bgColors[variant]
    )}
    title={title}
    {...props}
  >
    <span
      className="absolute"
      style={{
        top: '50%',
        left: '50%',
        transform: 'translate3d(-50%, -50%, 0)',
      }}
    >
      {icon && <FontAwesomeIcon icon={icon} size={size} />}
      {props.children}
    </span>
  </div>
)

export default CircleButton
