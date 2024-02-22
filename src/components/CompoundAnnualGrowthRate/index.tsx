import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../theme/colors.ts';
import spacing from '../../theme/spacing.ts';
import Divider from '../Divider';
import {CAGRType} from '../../utilities';

const CompoundAnnualGrowthRate: React.FC<{data?: CAGRType}> = ({data}) => {
  if (!data) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>CAGR</Text>
        <Text style={[styles.title, styles.green]}>{data?.annualReturn}%</Text>
      </View>
      <Divider size={0.5} padding={spacing.s} />
      {data?.meta?.map((item: any) => (
        <View key={item?.label} style={[styles.row, styles.meta]}>
          <Text style={styles.metaLabel}>{item?.label}</Text>
          <Text style={styles.metaValue}>{item?.value}</Text>
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
  },
  container: {
    padding: spacing.s,
    borderRadius: spacing.xs,
    borderWidth: 0.5,
    borderColor: colors.primary400,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  meta: {
    alignItems: 'center',
    paddingVertical: spacing.xxs,
  },
  metaLabel: {
    fontSize: 14,
    fontWeight: '300',
  },
  metaValue: {
    fontWeight: '500',
    fontSize: 14,
  },
  green: {
    color: colors.green500,
  },
});

export default CompoundAnnualGrowthRate;
