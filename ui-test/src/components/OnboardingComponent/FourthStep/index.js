import React from 'react';
import Styles from './myStyle.module.css'
import CustomTextField from '../../InputButton/Input'
import ContainedButton from "../../Buttons";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const FourthStepComp = (props) => {
  return (
    <>
      <form onSubmit={props.formik.handleSubmit}>
        <div>
          <div>
            <CheckCircleRoundedIcon sx={{ color: "#5A4AD1", fontSize: 68 }} />
          </div>
          <div className={Styles.header}>
            Congaturalation,{props.formik.values.fullName}
          </div>
          <p className={Styles.subHeader}>
            You have completed onboarding,you can start using eden
          </p>
        </div>
        <div className={Styles.button}>
          <ContainedButton type="submit" name="Launch Eden" />
        </div>
      </form>
    </>
  );
};

export default FourthStepComp;