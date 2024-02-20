import React from 'react';
import {SafeAreaView} from 'react-native';

import {UrQlProvider} from './src/graphql/urql';
import AssetsListingScreen from './src/screens/AssetsListing';
import {NotificationSettingsProvider} from './src/contexts/NotificationSettingsContext';

function App(): React.JSX.Element {
  return (
    <UrQlProvider>
      <NotificationSettingsProvider>
        <SafeAreaView style={{flex: 1}}>
          <AssetsListingScreen />
        </SafeAreaView>
      </NotificationSettingsProvider>
    </UrQlProvider>
  );
}

export default App;
