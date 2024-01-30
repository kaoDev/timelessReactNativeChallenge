import React, {FC} from 'react';
import {Box, Text} from '../atoms';

interface ErrorBoxProps {
  error?: Error;
}

export const ErrorBox: FC<ErrorBoxProps> = ({error}) => {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text variant="h5">Error</Text>
      <Text variant="body">Something went wrong please try again later..</Text>
    </Box>
  );
};
