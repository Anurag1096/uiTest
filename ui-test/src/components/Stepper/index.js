import  React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import StepIcon,{ stepIconClasses }  from '@mui/material/StepIcon';
import Step from '@mui/material/Step';
import { styled } from '@mui/material/styles';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses }  from '@mui/material/StepConnector';
import CircleIcon from '@mui/icons-material/Circle';
export default function HorizontalStepper(props) {

  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
          backgroundColor:
          '#857CC6',
          width:'50%',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor:
          '#857CC6',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderRadius: 1,
    },
  }));
  const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: 'grey',
    }),
    '& .QontoStepIcon-completedIcon': {
      color: '#5A4AD1',
      zIndex: 1,
      fontSize: 30,
    },
    '& .QontoStepIcon-circle': {
      width: 30,
      height: 30,
      borderRadius: '100%',
      backgroundColor: 'grey',
    },
  }));
  function QontoStepIcon(props) {
    const { active, completed, className } = props;
  
    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <CircleIcon className="QontoStepIcon-completedIcon" />
        ) : (
          <div className="QontoStepIcon-circle" />
        )}
      </QontoStepIconRoot>
    );
  }

    return (
      <Box sx={{ width: "100%" }}>
        <Stepper
          connector={<ColorlibConnector />}
          activeStep={props.activeSteps}
          alternativeLabel
        >
          <Step>
            <StepLabel StepIconComponent={QontoStepIcon}>{`1`}</StepLabel>
          </Step>
          <Step>
            <StepLabel StepIconComponent={QontoStepIcon}>{`2`}</StepLabel>
          </Step>
          <Step>
            <StepLabel StepIconComponent={QontoStepIcon}>{`3`}</StepLabel>
          </Step>
          <Step>
            <StepLabel StepIconComponent={QontoStepIcon}>{`4`}</StepLabel>
          </Step>
        </Stepper>
      </Box>
    );
}