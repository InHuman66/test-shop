import React, {useState} from 'react';
import classes from "./main.module.scss";
import Header from "../Header/header";
import Product from "../product/product";
import NewProductContainer from "../newProduct/newProductContainer";
import {itemsDataType} from "../../../bll/reducers/app-reducer";

type propsType ={
    dataItems: Array<itemsDataType>
    onClickSortCountSmall: ()=>void
    onClickSortCountMore: ()=>void
    onClickSortName: ()=>void
    onClickSortAvailable: (data:boolean)=>void
}

const Main:React.FC<propsType> =(props)=>{
    let [styleModal,setStyleModal]= useState(classes.modal_new_product_hide)
    let onClickNewProduct =()=>{
        setStyleModal(classes.modal_new_product)
    }
    let onClickNewProductEnd =()=>{
        setStyleModal(classes.modal_new_product_hide)
    }
    return(
        <div>
            <div className={'container'}>
                <div className={classes.wrapper_modal}>
                        <div className={styleModal}>
                            <NewProductContainer hideModal={onClickNewProductEnd}/>
                        </div>
                    <div className={classes.menu_style}>
                        <h1>Sort:</h1>
                        <div className={classes.sort_menu_style}>
                            <button onClick={props.onClickSortName} className={classes.btn_sort_style}>Name</button>
                        </div>
                        <div className={classes.sort_menu_style}>
                            <p>Count:</p>
                            <button className={classes.btn_sort_style} onClick={props.onClickSortCountMore}>More</button>
                            <button className={classes.btn_sort_style} onClick={props.onClickSortCountSmall}>Less</button>
                        </div>
                        <div className={classes.sort_menu_style}>
                            <p>Available:</p>
                            <input onChange={(e)=>{props.onClickSortAvailable(e.target.checked)}} type={"checkbox"}/>
                        </div>
                        <button onClick={onClickNewProduct} className={classes.btn_newProduct_style}>New Product</button>
                    </div>
                    <div className={'row'}>
                        {props.dataItems.map((elem)=><Product
                            price={elem.price}
                            key={elem.id} id={elem.id}
                            name={elem.name}
                            img={elem.imageUrl}
                            description={elem.description}
                            count={elem.count}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main