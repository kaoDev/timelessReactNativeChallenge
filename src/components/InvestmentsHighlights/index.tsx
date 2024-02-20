import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../theme/colors.ts';

const InvestmentsHighlights: React.FC<any> = ({data}) => {
  if (!Array.isArray(data) || data?.length < 1) {
    return null;
  }

  const renderRow = (
    i: {
      highlight: string;
    },
    index: number,
  ) => {
    return (
      <View style={styles.row} key={index}>
        <Text style={styles.number}>{index + 1}.</Text>
        <Text style={styles.text}>{i.highlight}</Text>
      </View>
    );
  };
  return (
    <View>
      <Text style={styles.title}>Investments Highlights</Text>
      {data.map(renderRow)}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    borderColor: colors.primary400,
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
    flexDirection: 'row',
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 20,
    color: colors.primary900,
    paddingVertical: 8,
  },
  text: {
    flex: 1,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: colors.primary900,
    paddingVertical: 8,
  },
  number: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 24,
    color: colors.tlBlue200,
    paddingVertical: 8,
    paddingRight: 16,
  },
});

export default InvestmentsHighlights;