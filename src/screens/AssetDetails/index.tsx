import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {useAsset} from '../../graphql/queries.ts';
import InvestmentsHighlights from '../../components/InvestmentsHighlights';
import backArrow from '../../assets/icons/back-arrow.png';
import NotificationBadge from '../../components/NotificationBadge';
import spacing from '../../theme/spacing.ts';
import colors from '../../theme/colors.ts';

interface AssetDetailScreenProps {
  id: string;
  onBack: () => void;
}
const AssetDetailScreen: React.FC<AssetDetailScreenProps> = ({
  id = '',
  onBack = () => null,
}) => {
  const [{data, fetching, error}] = useAsset(id);
  //
  React.useEffect(() => {
    if (!data?.asset?.id) {
      return;
    }
  }, [id, data?.asset?.id]);

  if (fetching) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={'blue'} />
      </View>
    );
  }
  if (error) {
    return (
      <View style={styles.center}>
        <Text>Something went wrong! Please try later.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableOpacity onPress={onBack} style={[styles.button, styles.back]}>
          <Image source={backArrow} style={styles.image} />
        </TouchableOpacity>
        <View style={[styles.button, styles.notification]}>
          <NotificationBadge id={data?.asset?.id} />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator>
          {data?.asset?.gallery?.map(i => (
            <Image
              key={i.url}
              resizeMode={'contain'}
              source={{uri: i.url}}
              style={{height: 200, width: Dimensions.get('screen').width}}
            />
          ))}
        </ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>{data?.asset?.make}</Text>
            <Text style={styles.subTitle}>{data?.asset?.label}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>CAGR</Text>
            <Text style={styles.metaValue}>{data?.asset?.annualReturn}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.metaLabel}>Drop Date:</Text>
            <Text style={styles.metaValue}>{data?.asset?.dropDate}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.metaLabel}>Drop Price:</Text>
            <Text style={styles.metaValue}>{data?.asset?.actualPrice}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.metaLabel}>Drop Mkt. Value</Text>
            <Text style={styles.metaValue}>{data?.asset?.price}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.metaLabel}>Fraction Price</Text>
            <Text style={styles.metaValue}>{data?.asset?.pricePerShare}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.metaLabel}>Expected Holding Period</Text>
            <Text style={styles.metaValue}>
              {data?.asset.expectedHoldingPeriodRange} Years
            </Text>
          </View>
          <InvestmentsHighlights data={data?.asset?.investmentHighlights} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    top: spacing.s,
    zIndex: 1,
  },
  back: {
    left: spacing.s,
  },
  notification: {
    right: spacing.s,
  },
  image: {
    width: 24,
    height: 24,
  },
  container: {
    padding: spacing.s,
    borderTopRightRadius: spacing.s,
    borderTopLeftRadius: spacing.s,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: spacing.base,
    },
    shadowOpacity: 0.6,
    shadowRadius: spacing.base,
    elevation: 8,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 20,
    paddingVertical: spacing.xs,
  },
  subTitle: {
    fontWeight: '300',
    fontSize: 14,
    lineHeight: 18,
    paddingBottom: 24,
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

export default AssetDetailScreen;
