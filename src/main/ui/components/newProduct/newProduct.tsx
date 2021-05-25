import React from "react";
import classes from "./newProduct.module.scss"
import {FormikProps} from "formik";
import { FormikValuesType } from "./newProductContainer";

type propsType={
    hideModal: ()=>void
    formik: FormikProps<FormikValuesType>
}

const NewProduct:React.FC<propsType> = (props)=>{
    return(
        <div className={classes.newProduct}>
            <div className={classes.modalWindow}>
                <div className={classes.wrapper_btn_cancel}>
                    <button onClick={()=>{props.hideModal()}}>Cancel</button>
                </div>
                <form onSubmit={props.formik.handleSubmit}>
                    <div className={classes.modalItem}>
                        <p>Name: </p>
                        <input {...props.formik.getFieldProps('name')} placeholder={'Name'}/>
                    </div>
                    <div className={classes.modalItem}>
                        <p>Image URL: </p>
                        <input {...props.formik.getFieldProps('imageURL')} placeholder={'Url'}/>
                    </div>
                    <div className={classes.modalItem}>
                        <p>Count: </p>
                        <input {...props.formik.getFieldProps('count')} placeholder={'Count'}  />
                        {props.formik.errors.count && props.formik.touched.count ? <div ><p>{props.formik.errors.count}</p></div> : null}
                    </div>
                    <div className={classes.modalItem}>
                        <p>Price in dollars: </p>
                        <input  {...props.formik.getFieldProps('price')} placeholder={'Prise'} type={'number'} min="0"/>
                    </div>
                    <div className={classes.modalItem}>
                        <p>Weight in grams: </p>
                        <input {...props.formik.getFieldProps('weight')} placeholder={'Weight'} type={'number'} min="0"/>
                    </div>
                    <div className={classes.modalItem}>
                        <p>Size in millimeters: </p>
                        <input {...props.formik.getFieldProps('width')} placeholder={'Width'} type={'number'} min="0"/>
                        <input {...props.formik.getFieldProps('height')} placeholder={'Height'} type={'number'} min="0"/>
                    </div>
                    <div className={classes.modalItemDescription}>
                        <p>Description: </p>
                        <textarea  {...props.formik.getFieldProps('description')} placeholder={'Your description'}/>
                    </div>
                    <div className={classes.wrapper_btn_add}>
                        <button type={'submit'} className={classes.btn_add}>Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default NewProduct