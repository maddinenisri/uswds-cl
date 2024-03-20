import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Checkbox',
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Disabled = {
  args: {disabled: true, checked: true},
};

export const WithLabel: Story = {
  args: {id: 'heading', name: 'heading', label: 'Welcome to Checkbox!', onChange: () => {console.log('changed')}},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Checkbox!/gi)).toBeTruthy();
  },
};
