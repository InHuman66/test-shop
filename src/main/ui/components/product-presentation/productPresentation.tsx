import React, {ChangeEvent, useState} from "react";
import classes from "./productPresentation.module.scss"
import IsSure from "../is-sure/isSure";

type propsType ={
    sendCommentItem: (id: string, comment: string)=>void
    id:string
    count:number
    width:number
    height:number
    weight: string
    price: number
    description:string
    deleteItem:(id:string)=>void
    comments: Array<{id: string, productId:string, description:string, date: string}>
}

const ProductPresentation:React.FC<propsType> = (props)=>{
    let [comment, setComment] = useState('');
    let [styleModalDelete,setStyleModalDelete]= useState(classes.modal_new_product_hide)
    let onClickDelete =()=>{
        setStyleModalDelete(classes.modal_new_product)
    }
    let onClickHide =()=>{
        setStyleModalDelete(classes.modal_new_product_hide)
    }
    let OnClickAgain =()=>{
        setStyleModalDelete(classes.modal_new_product_hide)
        props.deleteItem(props.id)

    }
    let onChangeComment= (e: ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.currentTarget.value)
    }
    let onClickAdd=()=>{
        if (comment !== ""){
            props.sendCommentItem(props.id, comment)
            setComment('')
        }
    }
    return(
        <div className={'container'}>
            <div className={classes.back_ground}>
                <div className={styleModalDelete}>
                    <IsSure onClickNo={onClickHide} OnClickYes={OnClickAgain}/>
                </div>
                <div className={'row'}>
                    <div className={'col-7'}>
                        <div className={classes.img_style}>
                            <img src={'https://www.fsequence.photography/wp-content/uploads/2015/09/product-photography-2-85.jpg'}/>
                        </div>
                    </div>
                    <div className={'col-5'}>
                        <div className={classes.manage_block}>
                            <div className={classes.btn_block}>
                                <button className={classes.button_edit}>Edit</button>
                                <button onClick={onClickDelete} className={classes.button_delete}>Delete</button>
                            </div>
                            <div className={classes.height_desc}>
                                <p>Price: <span>{props.price}$</span></p>
                            </div>
                            <div className={classes.low_desc}>
                                <h1>Properties</h1>
                                <p>-count: <span>{props.count}</span></p>
                                <p>-size: {props.width}x{props.height}</p>
                                <p>-weight: <span>{props.weight}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.low_info_style}>
                    <div>
                        <h1>Description</h1>
                        <p>{props.description}</p>
                    </div>
                    <div className={classes.comments_block}>
                        <h1>Comments</h1>
                        <div className={classes.positionItems}>
                            <textarea onChange={onChangeComment} value={comment}>
                            </textarea>
                            <button onClick={onClickAdd}>Send</button>
                        </div>
                        <div>
                            {props.comments.map(elem =>  <div className={classes.back_ground} key={elem.id}><p>{elem.description}</p><p>{elem.date}</p></div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductPresentation