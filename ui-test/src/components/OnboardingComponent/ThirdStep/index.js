import React,{useState} from 'react';
import Styles from './myStyle.module.css'
import CustomTextField from '../../InputButton/Input'
import ContainedButton from '../../Buttons'
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import OutlinedCard from '../../card';
const ThirdStepComp = (props)=>{
  const handleclick= (e)=>{
    e.preventDefault()
    if(!props.errors.useEden){
      props.setActiveStep(4)

    }
}
const [active1,setActive1]=useState(true)
const [active2,setActive2]=useState(false)
const handleClick1=()=>{
   setActive1(true)
   setActive2(false)

}
const handleClick2=()=>{
  setActive2(true)
  setActive1(false)

} 
  return (
    <>
      <form>
        <div>
          <div className={Styles.header}>How are you planning to use Eden?</div>
          <p className={Styles.subHeader}>
            We'll streamline your setup experience accordingly
          </p>
        </div>
        <div className={Styles.selectBoxContainer}>
          <label className={active1?Styles.labl:Styles.labl2} onClick={handleClick1}>
            <input
              type="radio"
              name="useEden"
              value="self"
              onChange={props.formik.handleChange}
              checked="checked"
            />
            <div className={Styles.selectBox}>
              <OutlinedCard
                icon={
                  <PersonIcon
                    fontSize="large"
                    style={{ color: active1 ? "#5A4AD1" : null }}
                  />
                }
                text="For myself"
                para="Write better.Think more cearly.Stay organized"
              />
            </div>
          </label>
          <label className={active2 ?Styles.labl:Styles.labl2} onClick={handleClick2}>
            <input
              type="radio"
              name="useEden"
              value="team"
              onChange={props.formik.handleChange}
            />

            <div className={Styles.selectBox}>
              <OutlinedCard
                icon={
                  <GroupsIcon
                    fontSize="large"
                    style={{ color: active2 ? "#5A4AD1" : null }}
                  />
                }
                text="With my team"
                para={`Wikis,docs,tasks & projects,all in one place. `}
              />
            </div>
          </label>
        </div>
        {props.formik.touched.useEden && props.errors.useEden ? (
          <p className={Styles.para}>{props.errors.useEden}</p>
        ) : null}
        <div className={Styles.button}>
          <ContainedButton
            onClick={(e) => handleclick(e)}
            name="Create Workspace"
          />
        </div>
      </form>
    </>
  );
}

export default ThirdStepComp;