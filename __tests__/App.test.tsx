/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';
import mockListingData from './mockListingData.json';
import mockDetailsData from './mockDetailsData.json';
import AssetDetailScreen from '../src/screens/AssetDetails';
import {useAsset, useAssetsList} from '../src/graphql/queries.ts';

const mockNotificationSettingsContext = {
  notificationIds: new Set(),
  addNotificationId: jest.fn(id =>
    mockNotificationSettingsContext.notificationIds.add(id),
  ),
  removeNotificationId: jest.fn(id =>
    mockNotificationSettingsContext.notificationIds.delete(id),
  ),
};

jest.mock('../src/contexts/NotificationSettingsContext', () => ({
  useNotificationSettings: () => mockNotificationSettingsContext,
  NotificationSettingsProvider: ({children}) => <>{children}</>,
}));

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  removeItem: jest.fn(),
  getItem: jest.fn(() => Promise.resolve()),
  clear: jest.fn(() => Promise.resolve()),
}));

jest.mock('../src/graphql/queries', () => ({
  useAssetsList: jest.fn(),
  useAsset: jest.fn(),
}));

describe('AssetListingScreen', () => {
  it('renders correctly', () => {
    useAssetsList.mockImplementation(() => [
      {
        data: {},
        fetching: false,
        error: null,
      },
    ]);
    renderer.create(<App />);
  });

  it('"FirstAssetLabel" is visible', () => {
    useAssetsList.mockImplementation(() => [
      {
        data: mockListingData,
        fetching: false,
        error: false,
      },
    ]);
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    const jsonString = JSON.stringify(tree);
    expect(jsonString).toContain('FirstAssetLabel');
  });

  it('renders Loading component when fetching', () => {
    useAssetsList.mockImplementation(() => [
      {
        data: undefined,
        fetching: true,
        error: false,
      },
    ]);
    const component = renderer.create(<App />);
    const loadingIndicator = component.root.findByProps({
      testID: 'loadingIndicator',
    });
    expect(loadingIndicator).toBeTruthy();
  });

  it('renders Error component when get error', () => {
    useAssetsList.mockImplementation(() => [
      {
        data: undefined,
        fetching: false,
        error: 'something went wrong',
      },
    ]);
    const component = renderer.create(<App />);
    const errorMessageComponent = component.root.findByProps({
      testID: 'errorMessage',
    });
    expect(errorMessageComponent).toBeTruthy();

    const errorMessage = errorMessageComponent.props.children;
    expect(errorMessage).toEqual('Something went wrong! Please try later.');
  });

  it('whenn click on AssetCard it should renders AssetDetailScreen', () => {
    useAssetsList.mockImplementation(() => [
      {
        data: mockListingData,
        fetching: false,
        error: false,
      },
    ]);

    useAsset.mockImplementation(() => [
      {
        data: mockDetailsData,
        fetching: false,
        error: null,
      },
    ]);

    const component = renderer.create(<App />);

    const firstAssetCard = component.root.findByProps({
      testID: `assetCard-FirstAssetId`,
    });
    expect(firstAssetCard).toBeTruthy();

    act(() => {
      firstAssetCard.props.onPress();
    });

    const assetDetailScreen = component.root.findAllByType(AssetDetailScreen);
    expect(assetDetailScreen.length).toBe(1);
  });

  it('Checks if notification toggle works', () => {
    useAssetsList.mockImplementation(() => [
      {
        data: mockListingData,
        fetching: false,
        error: null,
      },
    ]);

    const component = renderer.create(<App />);
    const notificationBadge = component.root.findByProps({
      testID: `notificationBadge-FirstAssetId`,
    });

    act(() => {
      notificationBadge.props.onPress();
    });

    expect(
      mockNotificationSettingsContext.addNotificationId,
    ).toHaveBeenCalledWith('FirstAssetId');

    act(() => {
      notificationBadge.props.onPress();
    });

    expect(
      mockNotificationSettingsContext.removeNotificationId,
    ).toHaveBeenCalledWith('FirstAssetId');
  });
});

describe('AssetDetailScreen', () => {
  it('renders correctly and "DetailScreenMockedMake" is visible', () => {
    useAsset.mockImplementation(() => [
      {
        data: mockDetailsData,
        fetching: false,
        error: null,
      },
    ]);

    const component = renderer.create(
      <AssetDetailScreen id="DetailScreenMockedID" onBack={() => {}} />,
    );
    const tree = component.toJSON();
    const jsonString = JSON.stringify(tree);
    expect(jsonString).toContain('DetailScreenMockedMake');
  });

  it('renders Loading component when fetching', () => {
    useAsset.mockImplementation(() => [
      {data: false, fetching: true, error: false},
    ]);

    const component = renderer.create(
      <AssetDetailScreen id="DetailScreenMockedID" onBack={() => {}} />,
    );

    const loadingIndicator = component.root.findByProps({
      testID: 'loadingIndicator',
    });
    expect(loadingIndicator).toBeTruthy();
  });

  it('renders Error component when get error', () => {
    useAsset.mockImplementation(() => [
      {data: false, fetching: false, error: 'something went wrong'},
    ]);

    const component = renderer.create(
      <AssetDetailScreen id="DetailScreenMockedID" onBack={() => {}} />,
    );

    const errorMessageComponent = component.root.findByProps({
      testID: 'errorMessage',
    });
    expect(errorMessageComponent).toBeTruthy();
    expect(errorMessageComponent.props.children).toEqual(
      'Something went wrong! Please try later.',
    );
  });
});
