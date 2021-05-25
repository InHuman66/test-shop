import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import ProductPresentation from "./productPresentation";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../bll/redux-state";
import {addCommentTC, deleteItemTC, itemsDataType, setSelectedItemDataAC} from "../../../bll/reducers/app-reducer";
import {nanoid} from "nanoid";

type Params ={
    itemId:string
}

const ProductPresentationContainer = ()=>{
    const dispatch = useDispatch()
    let params = useParams<Params>()
    const item= useSelector<AppRootStateType, itemsDataType>(state => state.appReducer.selectedItem)
    useEffect(()=>{
        dispatch(setSelectedItemDataAC(params.itemId))
    }, [params.itemId])
    let deleteItem= (id:string)=>{
        dispatch(deleteItemTC(id))
    }
    useEffect(()=>{
        console.log('done')
    }, [item])
    let sendCommentItem= (id:string,comment:string)=>{
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        let date = mm + '/' + dd + '/' + yyyy;
        let newComment = {id: nanoid(), productId: item.id, description: comment, date: date}
        dispatch(addCommentTC(id,newComment))
    }
    return(
        <ProductPresentation comments={item.comments} sendCommentItem={sendCommentItem} height={item.size.height} width={item.size.width} deleteItem={deleteItem} id={item.id} weight={item.weight} price={item.price} count={item.count} description={item.description} />
    )
}
export default ProductPresentationContainer