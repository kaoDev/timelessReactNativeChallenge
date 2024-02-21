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
