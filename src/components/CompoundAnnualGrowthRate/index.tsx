import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../theme/colors.ts';
import spacing from '../../theme/spacing.ts';

const CompoundAnnualGrowthRate: React.FC<any> = ({asset}) => {
  const [meta, setMeta] = React.useState<{label: string; value: string}[]>([]);

  React.useEffect(() => {
    setMeta([
      {label: 'Drop Date:', value: asset?.dropDate},
      {label: 'Drop Price:', value: `${asset?.actualPrice} €`},
      {label: 'Drop Mkt. Value', value: `${asset?.price} €`},
      {label: 'Fraction Price:', value: `${asset?.pricePerShare} €`},
      {
        label: 'Expected Holding Period:',
        value: `${asset?.expectedHoldingPeriodRange} Years`,
      },
    ]);
  }, [
    asset.id,
    asset?.actualPrice,
    asset?.dropDate,
    asset?.expectedHoldingPeriodRange,
    asset?.price,
    asset?.pricePerShare,
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>CAGR</Text>
        <Text style={styles.metaValue}>{asset?.annualReturn}</Text>
      </View>
      {meta.map(i => (
        <View style={styles.row} key={i.label}>
          <Text style={styles.metaLabel}>{i.label}</Text>
          <Text style={styles.metaValue}>{i.value}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 20,
    paddingVertical: spacing.xs,
  },
  container: {
    backgroundColor: '#fff',
    padding: spacing.s,
    borderRadius: spacing.xs,
    shadowColor: '#000',
    borderWidth: 0.5,
    borderColor: colors.primary400,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metaLabel: {
    fontWeight: '300',
  },
  metaValue: {
    fontWeight: '300',
  },
});

export default CompoundAnnualGrowthRate;
