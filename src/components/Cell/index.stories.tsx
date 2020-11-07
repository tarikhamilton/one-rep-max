import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Cell } from './index'
import { ITableCellProps } from '../interfaces/TableCell.interface'

export default {
  title: 'Components/Table/Cell',
  component: Cell,
} as Meta

const Template: Story<ITableCellProps> = (args) => <Cell {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 123,
}
