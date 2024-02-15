import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MessageDialog from '../src/components/dialogs/MessageDialog';
import { ThemeProvider } from '@shopify/restyle';
import { Theme } from '../assets/createTimelessTheme';

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

describe('MessageDialog Component', () => {
  const mockProps = {
    image: { uri: 'example.png' },
    title: 'Sample Title',
    description: 'Sample Description',
    buttonText: 'Click Me',
    buttonClick: jest.fn(),
  };

  it('renders correctly with provided props', () => {
    const { getByText } = render(
      <ThemeProvider theme={testTheme}>
        <MessageDialog {...mockProps} />
      </ThemeProvider>
    );

    expect(getByText('Sample Title')).toBeTruthy();
    expect(getByText('Sample Description')).toBeTruthy();
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('calls the buttonClick function when the button is pressed', () => {
    const { getByText } = render(
      <ThemeProvider theme={testTheme}>
        <MessageDialog {...mockProps} />
      </ThemeProvider>
    );
    fireEvent.press(getByText('Click Me'));
    expect(mockProps.buttonClick).toHaveBeenCalled();
  });
});
