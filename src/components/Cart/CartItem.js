import React from 'react'

export default function CartItem({item,value}) {
    const {id,title,img,price,total,count} = item;
    const {increment,decrement,removeItem} = value;
    return (
        <div className="blockage row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{width:"5rem",height: "5rem"}} className="img-fluid img-fix" alt="product" />
            </div>
            <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">Product : </span>
            {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">Price : </span>
            ${price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black btn-delete mx-1" onClick={()=>decrement(id)} >-</span>
                        <span className="btn btn-increment mx-1">{count}</span>

                        <span className="btn btn-black btn-add mx-1" onClick={()=>increment(id)}>+</span>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="col-10 mx-auto col-lg-2">
           <div>
               <i className="fas fa-trash cart-icon" onClick={()=>removeItem(id)}></i>
           </div>
            
            </div>
            <div className="col-10 mx-auto col-lg-2">
            <strong> item total : ${total}</strong>
            
            </div>
        </div>
    )
}
