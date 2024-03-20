import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './alert';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: 'Alert',
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {children: <ul><li>List 1</li><li>List 2</li></ul>},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId('alert')).toBeTruthy();
  },
};
