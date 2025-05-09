import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ZoneEntryForm from './zoneEntryForm';
const mockZones = ['Forest', 'Beach', 'Desert', 'Mountain', 'City'];
const meta: Meta<typeof ZoneEntryForm> = {
  title: 'Components/ZoneEntryForm',
  component: ZoneEntryForm,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ZoneEntryForm>;
export const Default: Story = {
  args: {
    availableZones: mockZones,
    onSubmit: (data: { name: string; zone: string }) => {
      alert(`Welcome ${data.name} to ${data.zone}!`);
    },
  },
};