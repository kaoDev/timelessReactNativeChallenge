import React, { useState, useEffect } from 'react';
import { SafeAreaView, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { useAsset } from '../../queries';
import styles from './AssetDetailedScreenStyles';
import { ActivityIndicatorOverlay, Box, ErrorConnectionDialog } from '../components';
import { LOADING } from '../utils/Constants';
import { setItem, getItem, removeItem } from '../utils/AsyncStorageUtils';
import { AssetItem } from '../components/cards/AssetItemCard';
import { useTheme } from '@shopify/restyle';
import { RootStackScreenProps } from '../navigation/StackNavigation';
import { Theme } from '../../assets/createTimelessTheme';
import { useNavigation } from '@react-navigation/native';

const theme = useTheme<Theme>();

export type AssetDetailedScreenProps = RootStackScreenProps<'AssetDetail'>;

const AssetDetailedScreen: React.FC<AssetDetailedScreenProps> = ({ route }) => {
  const { id } = route?.params;
  const navigation = useNavigation();


  const [{ fetching, data, error }] = useAsset(id);
  const assetItem: AssetItem = (data?.asset || {});

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [forceUpdateFlag, setForceUpdateFlag] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  getItem(`${assetItem?.type}-${id}`).then((value: string | null) => {
    if (value) setIsSubscribed(true);
  });


  // Call setForceUpdateFlag(true) to trigger a re-render
  const forceUpdate = () => {
    setForceUpdateFlag(prevState => !prevState);
  };


  const renderErrorConnectionModal = () => {
    error?.message && !showErrorModal && !fetching && setShowErrorModal(true);
    return (
      <ErrorConnectionDialog
        isVisible={showErrorModal}
        buttonClick={() => {
          setShowErrorModal(false);
          forceUpdate();
        }}
      />
    );
  };

  const onPressIcon = async () => {
    if (!isSubscribed) {
      await setItem(`${assetItem?.type}-${assetItem?.id}`, assetItem?.id);
      setIsSubscribed(true);
    } else {
      await removeItem(`${assetItem?.type}-${assetItem?.id}`);
      setIsSubscribed(false);
    }
  }

  useEffect(() => {

  }, [forceUpdateFlag]);

  const renderBackIcon = () => {
    return (
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon} >
        <Image style={{ width: theme.iconSize?.s, height: theme.iconSize?.s }} source={theme.icons?.back} />
      </TouchableOpacity>);
  }

  const renderHeaderRight = () => {
    return (
      <Box style={styles.iconContainer}>
        <TouchableOpacity onPress={() => onPressIcon()} style={styles.iconInnerContainer} >
          <Image style={{ width: theme.iconSize?.m, height: theme.iconSize?.m }} source={isSubscribed ? theme.icons?.heartFilled : theme.icons?.heart} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => null} style={styles.iconInnerContainer} >
          <Image style={{ width: theme.iconSize?.m, height: theme.iconSize?.m }} source={theme.icons?.share} />
        </TouchableOpacity>
      </Box>);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicatorOverlay isVisible={fetching} label={LOADING} />
      {renderErrorConnectionModal()}
      {!fetching && !showErrorModal && (
        <ScrollView style={styles.header}>
          <Box style={[styles.image, { backgroundColor: assetItem?.heroColour }]}>
            {renderHeaderRight()}
            {renderBackIcon()}
            <ImageBackground source={{ uri: assetItem?.heroImage }} style={styles.assetImage} />
          </Box>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default AssetDetailedScreen;
