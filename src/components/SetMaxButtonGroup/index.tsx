import React, { FC } from 'react'
import cx from 'classnames'
import { toPercent, toPercentMarkup } from './../../helpers'

interface ISetMaxBtn {
  active: boolean
  label?: string | null
  value?: number
  onClick?: any
}

const SetMaxBtn: FC<ISetMaxBtn> = ({
  label = null,
  value = 0,
  active,
  ...props
}) => (
  <button
    className={cx(`m-1 p-2 rounded bg-green-400 font-bold text-sm text-white`, {
      'bg-green-600': active,
    })}
    {...props}
  >
    {label || toPercentMarkup(value)}
  </button>
)

const SetMaxButtonGroup = ({
  dispatch,
  percents = [0.5, 0.6, 0.7, 0.8, 0.9],
  percentMax,
  setPercentMax,
}: any) =>
  percents
    .map((value: number) => (
      <SetMaxBtn
        key={value}
        onClick={() => setPercentMax(value)}
        active={value === percentMax}
        value={value}
      />
    ))
    .concat(
      <SetMaxBtn
        key="custom"
        active={!percents.includes(percentMax)}
        label="Custom"
        onClick={() => {}}
      />
    )

export default SetMaxButtonGroup
