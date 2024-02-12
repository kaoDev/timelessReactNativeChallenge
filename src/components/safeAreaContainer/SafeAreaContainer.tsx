import {PropsWithChildren} from 'react';
import {StatusBar, StyleSheet, useColorScheme} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ISafeAreaContainer} from 'src/types';
import {useTheme} from 'assets/createTimelessTheme';

const theme = useTheme();

// Define styles using the Theme provider
const styles = StyleSheet.create({
  background: {
    backgroundColor: theme.colors.lightBackground,
    flex: 1,
  },
});

const SafeAreaContainer = ({
  children,
  edges = [],
  ...rest
}: PropsWithChildren<ISafeAreaContainer>) => {
  // Determine if the device is in dark mode
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      {...rest}
      style={styles.background}
      edges={[...edges, 'right', 'left']}>
      {/* Set status bar color based on dark mode */}
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaContainer;
