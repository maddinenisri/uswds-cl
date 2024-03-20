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

export const Error = {
  args: {type: 'error', heading: 'Error alert', message: 'This is an error alert', role: 'alert', dismissible: true},
};

export const Information: Story = {
  args: {children: <ul><li>List 1</li><li>List 2</li></ul>, type: 'info', heading: 'Info alert', role: 'alert'},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByTestId('alert')).toBeTruthy();
  },
};
