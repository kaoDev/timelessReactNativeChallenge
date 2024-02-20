import React from 'react';
import {SafeAreaView} from 'react-native';

import {UrQlProvider} from './src/graphql/urql';
import AssetsListingScreen from './src/screens/AssetsListing';

function App(): React.JSX.Element {
  return (
    <UrQlProvider>
      <SafeAreaView style={{flex: 1}}>
        <AssetsListingScreen />
      </SafeAreaView>
    </UrQlProvider>
  );
}

export default App;
