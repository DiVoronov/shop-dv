import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

// interface ILoaderProps {
//   role: 'card' | 'card-detailed'
// };

export const LoaderCard = () => {
  return (
    <Stack spacing={1} sx={{display: 'flex' }}>
      <Skeleton variant="rectangular" width={300} height={100} />
    </Stack>
  );
};