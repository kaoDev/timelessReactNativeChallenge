import {createBox} from '@shopify/restyle';
import {Theme} from '../../../assets/createTimelessTheme';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

export const TouchBox = createBox<Theme, TouchableOpacityProps>(
  TouchableOpacity,
);
