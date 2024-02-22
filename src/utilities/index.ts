// Returns the formatted price
const formatPrice = (price: number): string => {
  return `${price?.toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR',
  })}`;
};

export interface CAGRType {
  annualReturn: number;
  meta: Array<{
    label: string;
    value: string | number;
  }>;
}
// Returns formatted data needed to render CompoundAnnualGrowthRate block
export const getCAGRData = (asset: any): CAGRType => {
  return {
    annualReturn: asset.annualReturn ?? 0,
    meta: [
      {
        label: 'Drop Date',
        value: new Date(asset.dropDate).toLocaleDateString(),
      },
      {label: 'Drop Price', value: formatPrice(asset.actualPrice ?? 0)},
      {label: 'Drop Mkt. Value', value: formatPrice(asset.price ?? 0)},
      {label: 'Fraction Price', value: formatPrice(asset.pricePerShare ?? 0)},
      {
        label: 'Expected Holding Period',
        value: `${asset.expectedHoldingPeriodRange} Years`,
      },
      {label: 'Fractions', value: asset.totalShares ?? 0},
    ],
  };
};

// Returns a darker version of the passed color based on amount, amount closer to 0 makes it darker
export const getDarkerColor = (
  hexColor: string,
  amount: number = 0.9,
): string => {
  if (!/^#[0-9A-Fa-f]{6}$/.test(hexColor)) {
    return hexColor;
  }

  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  const rDark = Math.floor(r * amount);
  const gDark = Math.floor(g * amount);
  const bDark = Math.floor(b * amount);

  return `#${rDark.toString(16).padStart(2, '0')}${gDark
    .toString(16)
    .padStart(2, '0')}${bDark.toString(16).padStart(2, '0')}`;
};
