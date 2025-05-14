import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';
import { RingCounter } from '../components/ringCounter';
const meta: Meta<typeof RingCounter> = {
  component: RingCounter,
};
export default meta;
type Story = StoryObj<typeof RingCounter>;
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // debugger; 
    // Example: simulate interaction
    await userEvent.click(canvas.getByRole('button', { name: 'Collect a Ring' }));
    // Assert something after interaction
    await expect(canvas.getByTestId('ring-count')).toHaveTextContent('Rings: 1');
    for (let i = 0; i < 4; i++) {
        await userEvent.click(canvas.getByRole('button', { name: 'Collect a Ring' }));
        }
    await expect(canvas.getByTestId('ring-count')).toHaveTextContent('Rings: 5');
    for (let i = 0; i < 2; i++) {
        await userEvent.click(canvas.getByRole('button', { name: 'Collect a Ring' }));}
    await expect(canvas.getByTestId('ring-count')).toHaveTextContent('Rings: 7');
  },
};