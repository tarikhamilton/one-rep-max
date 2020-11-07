import React, { FC } from 'react'
import cx from 'classnames'
import { toPercentMarkup } from './../../helpers'

export interface ISetMaxButtonGroup {
  onCustomMaxClick?: Function
  /** Percentage values in decimal form. */
  percents: number[]
  percentMax: number
  setPercentMax: Function
}

export interface ISetMaxBtn {
  active: boolean
  label?: string | null
  onClick?: any
  value?: number
}

const SetMaxBtn: FC<ISetMaxBtn> = ({
  active,
  label = null,
  value = 0,
  ...props
}) => (
  <button
    className={cx(
      `relative m-1 p-2 rounded border-green-700 font-bold text-sm text-white`,
      active ? 'bg-green-600' : 'bg-green-400',
      active ? 'border-0' : 'border-b-2',
      active ? 'top-2px' : 'top-0'
    )}
    {...props}
  >
    {label || toPercentMarkup(value)}
  </button>
)

export const SetMaxButtons: FC<ISetMaxButtonGroup> = ({
  onCustomMaxClick = null,
  percents,
  percentMax = 0.5,
  setPercentMax = (x: any) => x,
}) => (
  <>
    {percents
      .map((value: number) => (
        <SetMaxBtn
          key={value}
          onClick={() => setPercentMax(value)}
          active={value === percentMax}
          value={value}
        />
      ))
      .reduce(
        (acc: any, el, index, arr) =>
          arr.length - 1 === index && onCustomMaxClick
            ? acc.concat(
                el,
                <SetMaxBtn
                  key="custom"
                  active={!percents.includes(percentMax)}
                  label="Custom"
                  onClick={onCustomMaxClick}
                />
              )
            : acc.concat(el),
        []
      )}
  </>
)

export default SetMaxButtons
