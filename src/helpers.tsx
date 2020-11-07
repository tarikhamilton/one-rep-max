import React from 'react'
import styled from 'styled-components'

const Suffix = styled.span`
  margin-left: 1.5px;
  opacity: 0.9;
`

export const toPercent = (n: number) => (n * 100).toFixed() + '%'

export const toPercentMarkup = (n: number) =>
  addSuffix(toPercent(n).slice(0, -1), '%')

export const addSuffix = (str: string | number, suffix: string) => (
  <span>
    <span>{str}</span>
    <Suffix className="text-xs">{suffix}</Suffix>
  </span>
)
