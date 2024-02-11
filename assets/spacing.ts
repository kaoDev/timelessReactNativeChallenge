import Responsive from '../src/utils/Responsive';

export const baseUnit = Responsive.font(4);

const spacing = {
  base: baseUnit,
  xxs: baseUnit,
  xs: baseUnit * 2,
  s: baseUnit * 4,
  m: baseUnit * 6,
  l: baseUnit * 8,
  xl: baseUnit * 12,
  xxl: baseUnit * 16,
} as const;

export default spacing;
