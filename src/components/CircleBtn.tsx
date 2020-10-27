import React, { FC } from 'react'

const CircleBtn: FC<any> = (props: any) => (
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

export default CircleBtn
