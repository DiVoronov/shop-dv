import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface IRadioPanelProps {
  radioOptions: string[]
  handleSort: (e: React.MouseEvent<HTMLInputElement | HTMLButtonElement>, radioOptions: string) => void
};

export const RadioPanel: React.FC<IRadioPanelProps> = ( { radioOptions, handleSort } ) => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Sort by:</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
        {
          radioOptions.map( (option, index) => {
            return (
              <FormControlLabel key={index} value={option} control={<Radio onClick={(e) => handleSort(e, option)}/>} label={option}/>
            );
          })
        }
      </RadioGroup>
    </FormControl>
  );
}