import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { ActivityIndicatorOverlay } from '../src/components/overlays/ActivityIndicatorOverlay';
import { ThemeProvider } from '@shopify/restyle';
import { Theme } from '../assets/createTimelessTheme';

const mockAsyncStorage = require('@react-native-async-storage/async-storage/jest/async-storage-mock');
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

export const testTheme: Theme = {
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

describe('ActivityIndicatorOverlay', () => {
  test('renders activity indicator and label when visible', () => {
    const { getByTestId, queryByText } = render(
      <ThemeProvider theme={testTheme}>
        <ActivityIndicatorOverlay isVisible={true} label="Loading..." />
      </ThemeProvider>
    );

    // Check if the modal with testID "indicator" is visible
    const indicatorModal = getByTestId('indicator');
    expect(indicatorModal).toBeTruthy();

    // Check if the label is rendered
    const label = queryByText('Loading...');
    expect(label).toBeTruthy();
  });

  test('does not render label when not provided', () => {
    const { queryByText } = render(
      <ThemeProvider theme={testTheme}>
        <ActivityIndicatorOverlay isVisible={true} />
      </ThemeProvider>
    );

    // Check that the label is not rendered
    const label = queryByText('Loading...');
    expect(label).toBeNull();
  });

  test('does not render activity indicator when not visible', () => {
    const { queryByTestId } = render(
      <ThemeProvider theme={testTheme}>
        <ActivityIndicatorOverlay isVisible={false} label="Loading..." />
      </ThemeProvider>
    );

    // Check that the activity indicator is not rendered
    const activityIndicator = queryByTestId('indicator');
    expect(activityIndicator).toBeNull();
  });
});

