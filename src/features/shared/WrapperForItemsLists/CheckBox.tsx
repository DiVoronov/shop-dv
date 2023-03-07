import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormLabel } from '@mui/material';

interface ICheckboxPanelProps {
  checkboxOptions: string[]
  chooseCategoryFn: (e: React.MouseEvent<HTMLInputElement | HTMLButtonElement>, category: string) => void
};

export const CheckboxPanel: React.FC<ICheckboxPanelProps> = ({ checkboxOptions, chooseCategoryFn }) => {
  return (
    <FormGroup>
      <FormLabel id="demo-radio-buttons-group-label" sx={{m: 1}}>Фільтри:</FormLabel>
      {
        checkboxOptions.map( (category, index) => {
          return (
            <FormControlLabel 
              key={index} 
              sx={{ 
                fontSize: '10px',
                mr: 1, ml: 1, mt: .5,
                ['& > span']: {
                  fontSize: '.8rem',
                  textAlign: 'left',
                }
              }}
              control={<Checkbox onClick={(e) => chooseCategoryFn(e, category)} color='error' size='small'/>} 
              label={category} 
            />
          );
            })
      }
    </FormGroup>
  );
}