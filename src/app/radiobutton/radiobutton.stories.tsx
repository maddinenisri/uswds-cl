import type { Meta, StoryObj } from '@storybook/react';
import { Radiobutton } from './radiobutton';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Radiobutton> = {
  component: Radiobutton,
  title: 'Radiobutton',
};
export default meta;
type Story = StoryObj<typeof Radiobutton>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {id: 'test', name: 'test', label: 'test', labelDescription: 'Welcome to Radiobutton!'},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Radiobutton!/gi)).toBeTruthy();
  },
};
