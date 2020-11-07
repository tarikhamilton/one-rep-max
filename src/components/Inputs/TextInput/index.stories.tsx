import React, { SyntheticEvent, useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { TextInput } from '../index'

export default {
  title: 'Components/Forms/TextInput',
  component: TextInput,
} as Meta

const Template: Story<any> = (args) => {
  const [text, setText] = useState('Hello world')

  return (
    <TextInput
      onChange={({
        currentTarget: { value },
      }: SyntheticEvent<HTMLInputElement>) => setText(value)}
      value={text}
    />
  )
}

export const Primary = Template.bind({})
