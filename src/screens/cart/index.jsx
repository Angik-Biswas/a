import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import Plus from "../../assets/images/plus.png"
import Minus from "../../assets/images/minus.png"
import Remove from "../../assets/images/remove.png"
import './styles.css'
const Cart=()=>{
     const{products,totalQuantities, totalPrice}= useSelector(state=> state.CartReducer); 
     const dispatch= useDispatch();      
    return(
             <div className='cartpage'>
                 <div className='cart-container'>
                    <h3>your cart</h3>
                    {products.length>0 ?<>
                        <div className='row'>
                            <div className="col-9">
                                <div className="cart_heading">
                                    <div className="row">
                                        <div className="col-2">Picture</div>
                                        <div className="col-2">Name</div>
                                        <div className="col-2">Price</div>
                                        <div className="col-2">Inc/Dec</div>
                                        <div className="col-2">Total Price</div>
                                        <div className="col-2">Remove</div>
                                    </div>
                                </div>
                                  {products.map(product=>(
                                    <div className="vertical-aling" key={product.id} >
                                            <div className="col-2">
                                                <div className="cart_img">
                                                    <img src={product.image} alt="product_img"  className='p_i'/>
                                                </div>
                                            </div>
                                            <div className="col-2">
                                                <div className="cart_name">
                                                    {product.name}
                                                </div>
                                            </div>
                                            <div className="col-2">
                                                <div className="cart_price">
                                                    {product.discountPrice}
                                                </div>
                                            </div>
                                            <div className="col-2">
                                            <div className='details_in'>
                                          <div className='incdec1'>
                                          <span className='dec1' onClick={()=>dispatch({type:'DEC',payload:product.id})} ><img src={Minus} alt='icon' className='Icon1'/></span>
                                             <span className='quantity1'>{product.quantity}</span>
                                                  <span className='inc1'onClick={()=>dispatch({type:'INC', payload: product.id})} ><img src={Plus} alt='icon' className='Icon1'/></span>
                 
                                                 </div>
                                                 </div>
                                            </div>
                                              <div className="col-2">
                                                  <div className="cart_total">
                                                    {product.discountPrice * product.quantity}
                                                  </div>
                                              </div>
                                              <div className="col-2">
                                                 <div className="cart_remove" onClick={()=>dispatch({type:'REMOVE',payload:product.id})}>
                                                 <img src={Remove} alt='icon' className='Icon2'/>
                                                 </div>
                                              </div>
                                           </div>
                                          ))}
                                          </div>
                                          <div className="summery">
                                             <div className="summery_heading">
                                                summary
                                             </div>
                                             <div className="summery_details">
                                                <div className="row mb">
                                                    <div className="col-6">
                                                        <span className='ti'>Total Items:</span>
                                                    </div>
                                                    <div className="col-6">
                                                       {totalQuantities}
                                                    </div>
                                                </div>
                                                <div className="row mb">
                                                    <div className="col-6">
                                                        Total Price:
                                                    </div>
                                                    <div className="col-6">
                                                        {totalPrice}
                                                    </div>
                                                </div>
                                                <button className='checkout'>Checkout</button>
                                             </div>
                                            </div>

                                            </div>
                    
                                           </>: 'your cart is empty!'}
                                          </div>
                                        </div>
             
                                         )

                                        } 
                                        export default Cart;