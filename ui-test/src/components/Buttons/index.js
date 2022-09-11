import * as React from 'react';
import Button from '@mui/material/Button';


const ContainedButton=(props)=>{
    return (
      <>
        <Button
          {...props}
          style={{
            backgroundColor: "#5A4AD1",
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            fontSize:'1.5vh',
          }}
          variant="contained"
        >
          {props.name ? props.name : "Default"}
        </Button>
      </>
    );
}

export default ContainedButton;