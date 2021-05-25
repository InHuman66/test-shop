import { Dispatch } from "redux"

export type itemsDataType ={
    id: string
    price: number
    imageUrl: string
    name: string
    count: number
    description: string
    size: {
        width: number
        height: number
    },
    weight: string
    comments: Array<{
        id: string
        productId:string
        description:string
        date: string
    }> | []

}
let itemError={
    id: '0awdadadawdad',
    price: 20,
    imageUrl: 'dawdwa',
    name: 'dawdawd',
    count: 0,
    description: 'dwdawdw',
    size: {
        width: 20,
        height: 20,
    },
    weight: 'adwdawwad',
    comments:  []
}

type setItemsDataType ={
    type: 'SET-ITEMS-DATA'
    data: Array<itemsDataType>
}
type setSelectedItemType ={
    type: 'SET-SELECTED-ITEM'
    id:string
}
type sortItemsDataCountSmallType={
    type: 'SORT-DATA-SMALL-COUNT'
}
type sortItemsDataCountMoreType ={
    type:'SORT-DATA-MORE-COUNT'
}
type sortItemsDataNameType ={
    type:'SORT-DATA-NAME'
}
type sortItemsDataCountType ={
    type:'SORT-DATA-COUNT'
}


const initialState = {
    itemsData:[]as Array<itemsDataType>,
    selectedItem: itemError as itemsDataType
}
type ActionsType =
    setItemsDataType
    | setSelectedItemType
    | sortItemsDataCountSmallType
    | sortItemsDataCountMoreType
    | sortItemsDataNameType
    | sortItemsDataCountType

type InitialStateType = typeof initialState


export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-ITEMS-DATA':
            return {...state, itemsData: action.data}
        case 'SET-SELECTED-ITEM':
            let newItem = itemError
            if(state.itemsData.some(u => u.id === action.id)){
                // @ts-ignore
                newItem = state.itemsData.find(item => item.id === action.id)
            }else {
            }// @ts-ignore
            return {...state, selectedItem: newItem}
        case 'SORT-DATA-SMALL-COUNT':
            return {...state, itemsData: [...state.itemsData.sort((a, b)=>a.count - b.count)]}
        case 'SORT-DATA-MORE-COUNT':
            return {...state, itemsData: [...state.itemsData.sort((a, b)=>b.count - a.count)]}
        case 'SORT-DATA-NAME':
            return {...state, itemsData: [...state.itemsData.sort((a, b) => a.name.localeCompare(b.name))]}
        case 'SORT-DATA-COUNT':
            return {...state, itemsData: [...state.itemsData.filter(item => item.count !== 0)]}
        default:
            return state
    }
}

export  const setItemsDataAC= (data:Array<itemsDataType>):setItemsDataType=>{
    return {
        type:'SET-ITEMS-DATA',
        data: data,
    }
}
export  const setSelectedItemDataAC= (id:string):setSelectedItemType=>{
    return {
        type:'SET-SELECTED-ITEM',
        id: id,
    }
}
export  const sortItemsDataCountSmallAC= ():sortItemsDataCountSmallType=>{
    return {
        type:'SORT-DATA-SMALL-COUNT',
    }
}
export  const sortItemsDataCountMoreAC= ():sortItemsDataCountMoreType=>{
    return {
        type:'SORT-DATA-MORE-COUNT',
    }
}
export  const sortItemsDataNameAC= ():sortItemsDataNameType=>{
    return {
        type:'SORT-DATA-NAME',
    }
}
export  const sortItemsDataCountAC= ():sortItemsDataCountType=>{
    return {
        type:'SORT-DATA-COUNT',
    }
}
export  const getItemsTC  =()=>  async (dispatch:Dispatch)=>{
    let itemsData = await localStorage.getItem('itemsData')
    return new Promise((resolve, reject)=>{
        if (typeof itemsData === "string"){
            dispatch(setItemsDataAC(JSON.parse(itemsData)))
        }else {
        }
    })
}

export  const addItemTC  =(newItem:itemsDataType)=>  async (dispatch:Dispatch)=>{
    let itemsData = await localStorage.getItem('itemsData')
    return new Promise((resolve, reject)=>{
        if (typeof itemsData === "string"){
            let oldArr = JSON.parse(itemsData)
            let newArr = [...oldArr, newItem]
            localStorage.setItem('itemsData', JSON.stringify(newArr))
            dispatch(setItemsDataAC(newArr))
        }else {
            let newArr = [newItem]
            localStorage.setItem('itemsData', JSON.stringify(newArr))
            dispatch(setItemsDataAC(newArr))
        }
    })
}
export  const addCommentTC  =(id: string, comment:{id: string, productId:string, description:string, date: string})=>  async (dispatch:Dispatch)=>{
    let itemsData = await localStorage.getItem('itemsData')
    return new Promise((resolve, reject)=>{
        if (typeof itemsData === "string"){
            let oldArr:Array<itemsDataType> = JSON.parse(itemsData)
            let newArr = oldArr.map(elem => elem.id === id ? {...elem, comments: [...elem.comments, comment] } : elem)
            localStorage.setItem('itemsData', JSON.stringify(newArr))
            dispatch(setItemsDataAC(JSON.parse(itemsData)))
        }else {

        }
    })
}
export  const deleteItemTC  =(id:string)=>  async (dispatch:Dispatch)=>{
    let itemsData = await localStorage.getItem('itemsData')
    return new Promise((resolve, reject)=>{
        if (typeof itemsData === "string"){
            let oldArr:Array<itemsDataType> = JSON.parse(itemsData)
            let newArr = [...oldArr.filter(item => {return item.id === id} )]
            localStorage.setItem('itemsData', JSON.stringify(newArr))
            dispatch(setItemsDataAC(newArr))
        }else {
        }
    })
}

export  const sortAvailableTC  =(data: boolean)=>  async (dispatch:Dispatch)=>{
            if(data){
                dispatch(sortItemsDataCountAC())
            }else if (!data) {
                // @ts-ignore
                dispatch(getItemsTC())
            }
}