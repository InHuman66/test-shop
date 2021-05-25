import React from 'react';
import Main from "./main";
import {useDispatch, useSelector} from "react-redux";
import { AppRootStateType } from '../../../bll/redux-state';
import {
    itemsDataType,
    sortAvailableTC,
    sortItemsDataCountMoreAC,
    sortItemsDataCountSmallAC,
    sortItemsDataNameAC
} from "../../../bll/reducers/app-reducer";



const MainContainer =()=>{
    const itemsData= useSelector<AppRootStateType, Array<itemsDataType>>(state => state.appReducer.itemsData)
    const dispatch = useDispatch()

    let onClickSortCountSmall = ()=>{
        dispatch(sortItemsDataCountSmallAC())
    }
    let onClickSortCountMore = ()=>{
        dispatch(sortItemsDataCountMoreAC())
    }
    let onClickSortName = ()=>{
        dispatch(sortItemsDataNameAC())

    }
    let onClickSortAvailable = (data: boolean)=>{
        dispatch(sortAvailableTC(data))
    }
    return(
        <Main onClickSortAvailable={onClickSortAvailable} onClickSortName={onClickSortName} onClickSortCountMore={onClickSortCountMore} onClickSortCountSmall={onClickSortCountSmall} dataItems={itemsData}/>
    )
}
export default  MainContainer