import React, { FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../../assets/colors';
import { shadowVariants } from '../../../assets/shadows';
import spacing from '../../../assets/spacing';
import { textVariants } from '../../../assets/textVariants';

interface IProductListItem {
  item: any;
  onClick: any;
}

const statusLabel: any = {
  open: 'open',
  coming_soon: 'Bald verfugbar',
  financed: 'financed',
};

const isEqual = (prevProps: any, nextProps: any) =>
  prevProps.id === nextProps.id;

const ProductListItem: FC<IProductListItem> = React.memo(
  (props: IProductListItem) => {
    const { item, onClick } = props;

    return (
      <TouchableOpacity onPress={onClick}>
        <View
          style={{
            ...shadowVariants.elevation8,
            borderRadius: spacing.s,
            backgroundColor: item.heroColour,
            paddingVertical: spacing.m,
            marginBottom: spacing.m,
          }}>
          <View style={styles.generalInfo}>
            <View style={{ backgroundColor: colors.primary600 }}>
              <Text style={styles.label}>{statusLabel[item.status]}</Text>
            </View>
            <Icon name="bell" style={styles.bell} />
          </View>
          <View style={styles.details}>
            <Image source={{ uri: item.heroImage }} style={styles.image} />
            <Text style={styles.title}>{item.label}</Text>
            <Text style={textVariants.captions1}>
              Expiration Date: {item.dropDate}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  },
  isEqual,
);

export { ProductListItem };

const styles = StyleSheet.create({
  generalInfo: { flexDirection: 'row', justifyContent: 'space-between' },
  label: {
    ...textVariants.label,
    color: colors.white,
    paddingHorizontal: spacing.s,
    paddingVertical: spacing.xs,
  },
  details: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.m,
  },
  bell: {
    marginRight: spacing.m,
    fontSize: spacing.m,
    backgroundColor: colors.white,
    borderRadius: 32,
    padding: spacing.xxs,
  },
  title: {
    ...textVariants.itemTitle,
    color: colors.primary900,
    marginBottom: spacing.s,
  },
  image: { width: 128, height: 128 },
});
