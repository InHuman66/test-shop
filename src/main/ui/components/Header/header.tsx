import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./header.module.scss"

const Header = ()=>{
    return(
        <div className={'container'}>
            <div className={classes.backGround}>
                <h1>Shop</h1>
                <NavLink to={'/'} className={classes.home_btn}>Go home</NavLink>
            </div>
        </div>
    )
}
export default Header