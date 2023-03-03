import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface ICheckboxPanelProps {
  checkboxOptions: string[]
  chooseCategoryFn: (e: React.MouseEvent<HTMLInputElement | HTMLButtonElement>, category: string) => void
};

export const CheckboxPanel: React.FC<ICheckboxPanelProps> = ({ checkboxOptions, chooseCategoryFn }) => {
  return (
    <FormGroup>
      {
        checkboxOptions.map( (category, index) => {
          return (
            <FormControlLabel 
              key={index} 
              control={<Checkbox onClick={(e) => chooseCategoryFn(e, category)}/>} 
              label={category} 
            />
          );
            })
      }
    </FormGroup>
  );
}