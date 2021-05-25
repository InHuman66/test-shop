import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./product.module.scss"

type propsType ={
    id:string
    name: string
    img: string
    description: string
    count:number
    price: number
}

const Product:React.FC<propsType> = (props)=>{
    return(
        <div className={'col-3'}>
            <div className={classes.background_item}>
                <NavLink to={`/item/` + props.id}>
                    <img alt={''} src={props.img}/>
                </NavLink>
                <div className={classes.description_block_style}>
                    <h1>{props.name}</h1>
                    <div className={classes.description_elem}>
                        <p>Price: </p>
                        <p>{props.price}</p>
                    </div>
                    <div className={classes.description_elem}>
                        <p>Count: </p>
                        <p>{props.count}</p>
                    </div>
                    <div className={classes.description_elem}>
                        <p>available: </p>
                        {props.count !== 0 ? <p>True</p> : <p>False</p>}
                    </div>
                </div>
                <NavLink to={`/item/` + props.id}><button className={classes.btn_more}>More</button></NavLink>
            </div>
        </div>
    )
}
export default Product