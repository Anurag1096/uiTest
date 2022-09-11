import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { borderRadius } from '@mui/system';


export default function OutlinedCard(props) {
  return (
    <Box sx={{ minWidth: 205 ,textAlign:'start', borderRadius:10 , }}>
      <Card variant="outlined" >
      <React.Fragment>
      <CardContent>
      <Typography sx={{ padding:1}} color="text.secondary" gutterBottom>
        {props.icon}
      </Typography>
      <Typography variant="h5" sx={{color: "#40434A", padding:1 }} component="div">
        {props.text}
      </Typography>
     
      <Typography variant="body2" sx={{padding:1,color:'grey'}}>
        {props.para}
      </Typography>
    </CardContent>
  </React.Fragment>
      </Card>
    </Box>
  );
}