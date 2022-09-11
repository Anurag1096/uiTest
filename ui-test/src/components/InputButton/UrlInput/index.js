import * as React from 'react';
import Styles from './myStyles.module.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
const CustomUrlTextField =(props)=>{
    return (
      <>
        <div className={Styles.bigblue}>
          <div className={Styles.inputlabel}>
            <label>{props.label}</label>
            <label className={Styles.subLabel}>{`(${props.subLabel})`}</label>
            <br />
          </div>
          <Box sx={{ display: "flex" }}>
            <TextField
              id="outlined-basic"
              disabled
              placeholder="https://www.example.com"
              inputProps={{
                style: {
                  fontSize: "1.5vh",
                  width: "25vh",
                  borderRadius: 10,
                  backgroundColor: "#F4F6F9",
                  color:"#9BA0AB"
                },
              }}
            />
            <TextField
              id="outlined-basic"
              type={props.type}
              name={props.name}
              placeholder={props.placeholder}
              inputProps={{
                style: {
                  fontSize: "1.5vh",
                  border: 10,
                  width: "50%",
                  borderRadius: 10,
                },
              }}
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

export default CustomUrlTextField;