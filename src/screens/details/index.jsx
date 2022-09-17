import React,{useEffect,useState} from 'react'
import './style.css'
import {useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import Plus from "../../assets/images/plus.png"
import Minus from "../../assets/images/minus.png"


function Details() {
    const[quantity,setQuantity]=useState(1)
    const {id} = useParams();
    const dispatch=useDispatch();
    const {product} = useSelector(state=> state. ProductsReducer)
    console.log(product)
    useEffect(()=>{dispatch({type:'PRODUCT',id}) },[id])
    const decQuantity=()=>{
        if(quantity>1)
        {
            setQuantity(quantity-1)
        }
    }
  return (
    <div className='container mt-100'>
        <div className='row'>
            <div className='col-6'>
                <div className='details_images'>
                <img src={product.image} alt=" produc-image" className="img3"/> 
                </div>
                 
            </div>
             <div className='col-6'>
                <div className='details_name'>
                    {product.name}
                </div>
                <div className='details_price'>

                    <span className='details_actual_price'>{product.price}</span>
                    <span className='details_discount_price'>{product.discountPrice}</span>
                </div>
                <div className='details_info'>
                    <div className='incdec'>
                    <span className='dec' onClick={()=> decQuantity()}><img src={Minus} alt='icon' className='Icon'/></span>
                    <span className='quantity'>{quantity}</span>
                    <span className='inc' onClick={()=> setQuantity(quantity+1)}><img src={Plus} alt='icon' className='Icon'/></span>
                    <button className='btn-default' onClick={() => dispatch({type: 'ADD_TO_CART', payload: {product, quantity} })}>Add to cart</button>
                    </div>
                </div>
                <div className='details_p'>
                    <h4>Details</h4>
                     {product.desc}
                </div>
             
             </div>
        </div>
      
    </div>
  )
}

export default Details