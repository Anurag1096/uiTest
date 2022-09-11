import * as React from 'react';
import Styles from './mystyle.module.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
const CustomTextField =(props)=>{
    return (
      <>
        <div className={Styles.bigblue}>
          <div className={Styles.inputlabel}>
            <label>{props.label}</label>
            <br />
            </div>
    <Box>
          <TextField
            id="outlined-basic"
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            inputProps={{ style: { fontSize: '1.5vh',border:10 } }}
            fullWidth
            value={props.value}
            variant="outlined"
            onBlur={props.onBlur}
            onChange={props.onChange}
          />
          </Box>  
        </div>
      </>
    );
}

export default CustomTextField;