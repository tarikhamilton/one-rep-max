import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'

export interface CircleButtonProps {
  backgroundColor?: string
  size?: 'sm' | '2x' | '3x'
  onClick?: () => void
  title?: string
  icon?: IconProp
  children?: any
}

export const CircleButton: FC<CircleButtonProps> = ({
  icon,
  size = '2x',
  title,
  ...props
}) => (
  <div
    className="inline-block relative p-8 m-2 rounded-full cursor-pointer text-white text-sm font-bold uppercase bg-purple-400"
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
