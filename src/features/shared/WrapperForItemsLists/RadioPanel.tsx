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
      <FormLabel id="demo-radio-buttons-group-label" sx={{m: 1}}>Сортувати:</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
        {
          radioOptions.map( (option, index) => {
            return (
              <FormControlLabel 
              key={index} 
              value={option} 
              sx={{ 
                fontSize: '10px',
                mr: 1, ml: 1, mt: .5,
                ['& > span']: {
                  fontSize: '.8rem',
                  textAlign: 'left',
                }
              }}
              control={
                <Radio 
                  onClick={(e) => handleSort(e, option)} 
                  color='error'
                />
              } 
              label={option}/>
            );
          })
        }
      </RadioGroup>
    </FormControl>
  );
}