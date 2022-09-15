
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ColorTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '130ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField className='mybox'
        placeholder='Que cherchez-vous?'
        variant="standard"
        color=""
        focused
      />
    </Box>
  );
}
