import React, {FC} from 'react';
import {Box} from '../box/Box';
import {Text} from '../text/Text';

interface ErrorBoxProps {
  error?: Error;
}

export const Error = ({error}: ErrorBoxProps) => {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text variant="h5">Error</Text>
      <Text variant="body">Something went wrong please try again later..</Text>
    </Box>
  );
};
