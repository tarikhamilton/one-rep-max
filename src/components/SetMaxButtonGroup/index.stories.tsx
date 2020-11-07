import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ISetMaxButtonGroup, SetMaxButtons } from './index'

export default {
  title: 'Components/Buttons/SetMaxButtonGroup',
  component: SetMaxButtons,
} as Meta

const Template: Story<ISetMaxButtonGroup> = (args) => {
  const [percentMax, setPercentMax] = useState(0.5)

  return (
    <SetMaxButtons
      {...args}
      onCustomMaxClick={undefined}
      percentMax={percentMax}
      setPercentMax={(v: number) => setPercentMax(v)}
    />
  )
}

export const Primary = Template.bind({})
Primary.args = {
  percents: [0.5, 0.55, 0.6],
  setPercentMax: () => {},
}
