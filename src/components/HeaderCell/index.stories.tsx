import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { HeaderCell } from './index'
import { ITableCellProps } from '../interfaces/TableCell.interface'

export default {
  title: 'Components/Table/HeaderCell',
  component: HeaderCell,
} as Meta

const Template: Story<ITableCellProps> = (args) => <HeaderCell {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Heading',
}
