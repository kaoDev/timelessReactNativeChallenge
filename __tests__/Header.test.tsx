import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import { Theme } from '../assets/createTimelessTheme';
import {Header} from '../src/components/layouts/Header';
import {Text} from '../src/components';

const mockAsyncStorage = require('@react-native-async-storage/async-storage/jest/async-storage-mock');
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

const testTheme: Theme = {
    spacing: {
        xl: 10,
    },
}

// Mock the useTheme hook to always returnt he test theme
jest.mock('@shopify/restyle', () => {
    const RealModule = { ...jest.requireActual('@shopify/restyle') }
    const RN = jest.requireActual('react-native')
    RealModule.useTheme = () => testTheme
    RealModule.createText = () => RN.Text
    RealModule.createBox = () => RN.View
    RealModule.useTheme = () => testTheme
    RealModule.createRestyleComponent = (f: any, c: any) => c || RN.View
    return RealModule
  });

describe('Header Component', () => {
  test('renders correctly with provided props', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={testTheme}>
        <Header
          left={<Text>Left Component</Text>}
          center={<Text>Center Component</Text>}
          right={<Text>Right Component</Text>}
        />
      </ThemeProvider>
    );

    expect(getByText('Left Component')).toBeTruthy();
    expect(getByTestId('leftContent')).toBeTruthy();

    expect(getByText('Center Component')).toBeTruthy();
    expect(getByTestId('centerContent')).toBeTruthy();

    expect(getByText('Right Component')).toBeTruthy();
    expect(getByTestId('rightContent')).toBeTruthy();

  });
});
