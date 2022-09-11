import React ,{useState} from 'react';
import CustomTextField from '../../InputButton/Input'
import Styles from './myStyle.module.css'
import ContainedButton from '../../Buttons'
const FirstStepComp= (props)=>{

const handleclick= (e)=>{
  e.preventDefault()
  if(!props.errors.fullName && props.formik.touched.fullName && props.formik.touched.displayName && !props.errors.displayName){
    props.setActiveStep(2);
  }
}


return (
  <>
    <form>
      <div>
        <div className={Styles.header}>Welcome ! first things first...</div>
        <p className={Styles.subHeader}>You can allso change them later</p>
      </div>
      <div className={Styles.inputSection}>
        <div className={Styles.inputContainer}>
          <CustomTextField
            label="Full Name"
            placeholder="Steve jobs"
            name="fullName"
            type="text"
            onBlur={props.formik.handleBlur}
            onChange={props.formik.handleChange}
            values={props.formik.values.fullName}
          />
          {props.formik.touched.fullName && props.errors.fullName ? (
            <p className={Styles.para}>{props.errors.fullName}</p>
          ) : null}
        </div>
        <div className={Styles.inputContainer}>
          <CustomTextField
            name="displayName"
            type="text"
            onBlur={props.formik.handleBlur}
            onChange={props.formik.handleChange}
            values={props.formik.values.displayName}
            label="Display Name"
            placeholder="Steve"
          />
          {props.formik.touched.displayName && props.errors.displayName ? (
            <p className={Styles.para}>{props.errors.displayName}</p>
          ) : null}
        </div>
        <div className={Styles.button}>
          <ContainedButton
            onClick={(e) => handleclick(e)}
            name="Create Workspace"
          />
        </div>
      </div>
    </form>
  </>
);
}

export default FirstStepComp;