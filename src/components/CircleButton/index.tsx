import React, { FC } from 'react'

export interface CircleButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

export const CircleButton: FC<CircleButtonProps> = (props) => (
  <div
    className="inline-block relative p-8 m-2 rounded-full text-white text-sm font-bold uppercase bg-purple-400"
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
      {props.children}
    </span>
  </div>
)

export default CircleButton
