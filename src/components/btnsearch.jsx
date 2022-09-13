import   React from 'react';
import Button from '@mui/material/Button';

const btnsearch = () => {
    return ( 
        <div className='btn1'>
            <Button
  onClick={() => {
    alert('recherche activée');
  }}
>
  Recherche
</Button>
        </div>
     );
}
 
export default btnsearch;