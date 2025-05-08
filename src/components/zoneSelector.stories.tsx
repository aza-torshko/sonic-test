import { ZoneSelector } from './zoneSelector';
export default {
  title: 'Sonic/ZoneSelector',
  component: ZoneSelector,
};
export const Default = {
  args: {
    zones: ['Green Hill Zone', 'Chemical Plant Zone', 'Sky Sanctuary'],
    onSelect: (zone: string) => alert(`Selected: ${zone}`),
  },
};