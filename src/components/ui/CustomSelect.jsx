import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import  React from 'react';


export default function CustomSelect({label,options,handleChange,value}) {


  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl  className='bg-white' fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
        >
        {
            options?.map((item,index)=><MenuItem key={index} value={item?.value}>{item?.label}</MenuItem>)
        }
          
        </Select>
      </FormControl>
    </Box>
  );
}