import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

interface IRatingProps {
  estimate: number
  allVotes: number
};

export const BasicRating: React.FC<IRatingProps> = ({ estimate, allVotes }) => {

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Рейтинг:</Typography>
      <Rating name="read-only" value={estimate} readOnly />
      <Box>Всього голосів: {allVotes}</Box>
    </Box>
  );
};