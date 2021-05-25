import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./isSure.module.scss"

type propsType ={
    onClickNo: ()=>void
    OnClickYes: ()=>void
}

const IsSure:React.FC<propsType> = (props)=>{
    return(
        <div className={classes.positionModal}>
            <div className={classes.backGround}>
                <h1>Are you sure???</h1>
                <div>
                    <NavLink to={'/'}><button onClick={props.OnClickYes}  className={classes.btn_sure}>Yes</button></NavLink>
                    <button onClick={props.onClickNo} className={classes.btn_no}>No</button>
                </div>
            </div>
        </div>
    )
}
export default IsSure