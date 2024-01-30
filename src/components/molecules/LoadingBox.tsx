import React, {FC} from 'react';
import {Box, Text} from '../atoms';

export const LoadingBox: FC = () => {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text variant="h5">Loading...</Text>
    </Box>
  );
};
