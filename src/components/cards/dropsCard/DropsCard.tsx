import React from 'react';
import {TouchableOpacity, Image, StyleSheet, View} from 'react-native';
import {Box} from 'src/components/box/Box';
import {Text} from 'src/components/text/Text';
import {useTheme} from 'assets/createTimelessTheme';
import {IDropItem} from 'src/types';
import Tag from 'src/components/tag/Tag';
import ButtonCircle from 'src/components/buttons/circle/Circle';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 12,
    marginTop: 16,
    flexDirection: 'column',
  },
  image: {
    height: 220,
    width: '60%',
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  content: {
    flexDirection: 'column',
    padding: 16,
    borderBottomStartRadius: 12,
    paddingTop: 24,
    borderBottomEndRadius: 12,
  },
  tagsContainer: {
    position: 'absolute',
    top: 20,
    left: 0,
    zIndex: 1,
  },
  favoriteContainer: {
    position: 'absolute',
    top: 20,
    right: 10,
    zIndex: 1,
    alignItems: 'center',
  },
});

type IDropCardProps = {
  dropItem: IDropItem;
  onPress: (id: string) => void;
  onFavoritePress: () => void;
};

const DropsCard = ({dropItem, onPress, onFavoritePress}: IDropCardProps) => {
  const theme = useTheme();

  const renderBottomTextContainer = (firstText: String, secondText: String) => {
    return (
      <Box flexDirection={'row'} justifyContent={'space-between'}>
        <Text variant="captions1" fontWeight={'300'}>
          {firstText}
        </Text>
        <Text variant="captions1" fontWeight={'500'}>
          {secondText}
        </Text>
      </Box>
    );
  };

  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          backgroundColor: dropItem.heroColour
            ? dropItem.heroColour
            : theme.colors.activeBackground,
          ...theme.shadowVariants.elevation4,
        },
      ]}
      onPress={() => onPress(dropItem.id)}>
      <Box style={styles.favoriteContainer}>
        <ButtonCircle selected onButtonPress={() => {}} />
        <Text variant="captions1" fontWeight={'500'}>
          {dropItem.countLikes}
        </Text>
      </Box>
      <Box style={styles.tagsContainer}>
        {dropItem.status === 'coming_soon' && (
          <Tag
            backgroundColor={theme.colors.tlDarkGray}
            textColor={theme.colors.lightBackground}
            text={'COMING SOON'}
          />
        )}
        {dropItem.status === 'exited' && (
          <Tag
            backgroundColor={theme.colors.success}
            textColor={theme.colors.lightBackground}
            text={'EXITED/SOLD'}
          />
        )}
      </Box>
      <Image
        style={styles.image}
        source={{uri: dropItem?.heroImage ? dropItem?.heroImage : undefined}}
      />
      <Box
        style={[
          styles.content,
          {
            backgroundColor: dropItem.heroColour
              ? dropItem.heroColour
              : theme.colors.activeBackground,
          },
        ]}>
        <Text marginBottom={'s'} variant={'body'}>
          {dropItem?.label}
        </Text>

        {dropItem.status === 'open' && (
          <>
            {renderBottomTextContainer('Our Drop Price', 'Drop Market Value')}
            {renderBottomTextContainer(
              `${dropItem?.actualPrice} €`,
              `${dropItem?.price} €`,
            )}
          </>
        )}

        {dropItem.status === 'coming_soon' && (
          <>
            {renderBottomTextContainer('Our Drop Price', 'Drop Market Value')}
            {renderBottomTextContainer(
              `${dropItem?.actualPrice} €`,
              `${dropItem?.price} €`,
            )}
          </>
        )}

        {dropItem.status === 'exited' && (
          <>
            {renderBottomTextContainer('Our Drop Price', 'Exit Price')}
            {renderBottomTextContainer(
              `${dropItem?.actualPrice} €`,
              `${dropItem?.exitPrice} €`,
            )}
          </>
        )}
      </Box>
    </TouchableOpacity>
  );
};

export default DropsCard;
