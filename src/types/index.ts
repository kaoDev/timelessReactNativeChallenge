import {TouchableOpacityProps, ViewProps} from 'react-native';
import {Edge, SafeAreaViewProps} from 'react-native-safe-area-context';

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
