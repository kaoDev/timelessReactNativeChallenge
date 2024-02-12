import React, {FC} from 'react';
import {Box} from '../box/Box';
import {Text} from '../text/Text';

export const Loading = () => {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text variant="h5">Loading...</Text>
    </Box>
  );
};
