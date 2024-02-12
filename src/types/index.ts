import {TouchableOpacityProps} from 'react-native';
import {Edge, SafeAreaViewProps} from 'react-native-safe-area-context';
import {AssetType, CollectorsClubType, AssetStatus} from 'graphql/graphql';

export interface IHeaderTitleProps {
  headingText: string;
  subHeadingText: string;
}

export interface ISafeAreaContainer extends SafeAreaViewProps {
  edges?: Array<Edge>;
}

export interface IButton extends TouchableOpacityProps {
  onButtonPress: () => void;
}

export interface IButtonCircle extends IButton {
  iconNameNormal: string;
  iconNamePressed: string;
  iconColor: string;
  selected: boolean;
}

export interface ITag {
  backgroundColor: string;
  textColor: string;
  text: string;
}

export interface IDropItem {
  id: string;
  label?: string | null;
  heroColour?: string | null;
  heroImage?: string | null;
  type: AssetType;
  dropDate?: any | null;
  actualPrice: number;
  averageMarketPrice?: number | null;
  make?: string | null;
  model?: string | null;
  exitPrice?: number | null;
  exitDate?: any | null;
  collectorsClubType: CollectorsClubType;
  status: AssetStatus;
  countLikes: number;
  price: number;
  pricePerShare?: number | null;
}
