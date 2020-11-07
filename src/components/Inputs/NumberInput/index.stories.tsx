import React, { SyntheticEvent, useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { NumberInput } from '../index'

export default {
  title: 'Components/Forms/NumberInput',
  component: NumberInput,
} as Meta

const Template: Story<any> = (args) => {
  const [text, setText] = useState('420')

  return (
    <NumberInput
      onChange={({
        currentTarget: { value },
      }: SyntheticEvent<HTMLInputElement>) => setText(value)}
      value={text}
    />
  )
}

export const Primary = Template.bind({})
