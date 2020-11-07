import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { faPen } from '@fortawesome/free-solid-svg-icons'

import { CircleButton, CircleButtonProps } from './index'

export default {
  title: 'Components/CircleButton',
  component: CircleButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<CircleButtonProps> = (args) => <CircleButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  icon: faPen,
}
