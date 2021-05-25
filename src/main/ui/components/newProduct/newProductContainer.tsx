import { useFormik } from "formik";
import React from "react";
import NewProduct from "./newProduct";
import {useDispatch} from "react-redux";
import { addItemTC } from "../../../bll/reducers/app-reducer";
import { nanoid } from 'nanoid'

type propsType ={
    hideModal: ()=>void
}
type FormikErrorType = {
    name?: string
    imageURL?: string
    count?: string
    price?: string
    weight?: string
    width?: string
    height?: string
    description?: string
}
export type FormikValuesType ={
    name: string
    imageURL: string
    count: string
    price: string
    weight: string
    width: string
    height: string
    description: string
}

const NewProductContainer:React.FC<propsType> = (props)=>{
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            name: '',
            imageURL: '',
            count: '',
            price: '',
            weight: '',
            width: '',
            height: '',
            description:'',

        },
        validate:(values)=>{
            const errors: FormikErrorType = {};
            if (!values.name) {
                errors.name = 'Required';
            }
            if (!values.imageURL) {
                errors.imageURL = 'Required';
            }
            if (!values.count) {
                errors.count = 'Required';
            }else if (/[^0-9]/.test(values.count)){
                errors.count = 'Only numbers'
            }
            if (!values.price) {
                errors.price = 'Required';
            }else if (/[^0-9]/.test(values.price)){
                errors.price = 'Only numbers'
            }
            if (!values.weight) {
                errors.weight = 'Required';
            }else if (/[^0-9]/.test(values.weight)){
                errors.weight = 'Only numbers'
            }
            if (!values.height) {
                errors.height = 'Required';
            }else if (/[^0-9]/.test(values.height)){
                errors.height = 'Only numbers'
            }
            if (!values.width) {
                errors.width = 'Required';
            }else if (/[^0-9]/.test(values.width)){
                errors.width = 'Only numbers'
            }
            if (!values.description) {
                errors.description = 'Required';
            }

            return errors;
        },
        onSubmit: values => {
            dispatch(addItemTC({
                id: nanoid(),
                imageUrl:values.imageURL,
                description: values.description,
                count: Number(values.count),
                comments: [],
                name: values.name,
                price: Number(values.price),
                size:{
                    width: Number(values.width),
                    height:Number(values.height),
                },
                weight:values.weight + 'g'}
                ))
            props.hideModal()
        },
    });
    return(
        <div>
            <NewProduct hideModal={props.hideModal} formik={formik}/>
        </div>
    )
}
export default NewProductContainer
