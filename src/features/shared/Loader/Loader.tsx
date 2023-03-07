import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

// interface ILoaderProps {
//   role: 'card' | 'card-detailed'
// };

export const Loader = () => {
  return (
    <Stack spacing={1} sx={{display: 'flex' }}>
      <Box sx={{width: '30%'}}>
        <Skeleton variant="rectangular" width={300} height={300} />
      </Box>
      <Box>
        <Skeleton variant="rectangular" width={300} height={60} />
        <Skeleton variant="rectangular" width={300} height={30} />
      </Box>
    </Stack>
  );
};