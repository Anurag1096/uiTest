import React,{useState} from 'react';
import FirstStepComp from '../../components/OnboardingComponent/FirstStep';
import SecondStepComp from '../../components/OnboardingComponent/SecondStep';
import ThirdStepComp from '../../components/OnboardingComponent/ThirdStep';
import FourthStepComp from '../../components/OnboardingComponent/FourthStep';
import Styles from './myStyles.module.css';
import HorizontalStepper from '../../components/Stepper';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useControlled } from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';
const OnboardingPage = ()=>{
    const [activeSteps,setActiveStep]=useState(1)

    const formik = useFormik({
      initialValues: {
        fullName: "",
        displayName: "",
        workspaceName: "",
        useEden: "self",
        url: "",
      },

      validationSchema: yup.object({
        fullName: yup
          .string()
          .max(45, "Must be 45 char or less")
          .required("Required"),
        displayName: yup
          .string()
          .max(45, "Must be 45 char or less")
          .required("Required"),
        workspaceName: yup
          .string()
          .max(45, "Must be 45 char or less")
          .required("Required"),
        url: yup.string().url(),
      }),

      onSubmit: (values) => {
        console.log(values);
      },
    });
    return (
      <>
        <main className={Styles.main}>
          <div className={Styles.logo}>
              <div><SpaIcon fontSize="large" sx={{color:'#5A4AD1'}}/></div>
              <div className={Styles.headtag}>Eden</div>
          </div>
          <HorizontalStepper
            activeSteps={activeSteps}
            setActiveStep={setActiveStep}
          />

          {activeSteps === 1 ? (
            <div className={Styles.divone}>
              <FirstStepComp setActiveStep={setActiveStep} errors={formik.errors} formik={formik}/>
            </div>
          ) : null}
          {activeSteps === 2 ? (
            <div className={Styles.divone}>
              <SecondStepComp setActiveStep={setActiveStep} errors={formik.errors} formik={formik}/>
            </div>
          ) : null}
          {activeSteps === 3 ? (
            <div className={Styles.divone}>
              <ThirdStepComp setActiveStep={setActiveStep} errors={formik.errors} formik={formik}/>
            </div> 
          ) : null}
          {activeSteps === 4 ? (
            <div className={Styles.divone}>
              <FourthStepComp setActiveStep={setActiveStep} formik={formik}/>
            </div>
          ) : null}
        </main>
      </>
    );
}

export default OnboardingPage;