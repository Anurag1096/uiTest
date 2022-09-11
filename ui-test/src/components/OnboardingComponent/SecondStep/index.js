import React from 'react';
import Styles from './mystyle.module.css'
import CustomTextField from '../../InputButton/Input'
import ContainedButton from '../../Buttons'
import CustomUrlTextField from '../../InputButton/UrlInput';
const SecondStepComp = (props)=>{

const handleclick= (e)=>{
  e.preventDefault()
  if(!props.errors.workspaceName && props.formik.touched.workspaceName ){
    props.setActiveStep(3)
  }
    }
    
    return (
      <>
        <form>
          <div>
            <div className={Styles.header}>
              Lets set up a home for all your work{" "}
            </div>
            <p className={Styles.subHeader}>
              You can allways create another workspace later
            </p>
          </div>
          <div className={Styles.inputSection}>
            <div className={Styles.inputContainer}>
              <CustomTextField
                label="Workspace Name"
                type="text"
                placeholder="Eden"
                name="workspaceName"
                onBlur={props.formik.handleBlur}
                onChange={props.formik.handleChange}
                values={props.formik.values.workspaceName}
              />
              {props.formik.touched.workspaceName &&
              props.errors.workspaceName ? (
                <p className={Styles.para}>{props.errors.displayName}</p>
              ) : null}
            </div>
            <div className={Styles.inputContainer}>
              <CustomUrlTextField
                name="url"
                type="text"
                subLabel='optional'
                onBlur={props.formik.handleBlur}
                onChange={props.formik.handleChange}
                values={props.formik.values.url}
                label="Wrokspace URL"
                placeholder="Example"
              />

              {props.formik.touched.url && props.errors.url ? (
                <p className={Styles.para}>{props.errors.url}</p>
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

export default SecondStepComp;