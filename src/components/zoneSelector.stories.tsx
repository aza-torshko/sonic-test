import ZoneSelector from './zoneSelector';
export default {
  title: 'Sonic/ZoneSelector',
  component: ZoneSelector,
};
export const Default = {
  args: {
    zones: ['Forest', 'Beach', 'Desert', 'Mountain', 'City'],
    onSelect: (zone: string) => alert(`Selected: ${zone}`),
  },
};