import React from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export class Details extends React.Component {
    render(){
        return(
            <ProductConsumer>
                {(value)=>{
                const {id,company,img,info,price,title,type,inCart} = value.detailProduct
                return(
                    <div className="container py-5">
                        {/* TITLE */}
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted text-purple my-5">
                                <h1>{title}</h1>
                            </div>
                        </div>
                        {/* END TITLE */}
                        {/* PRODUCT INFO */}
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3">
                            <img src={img} className="img-fluid" alt="Product"/>
                            </div>
                            {/*PRODUCT TEXT */}
                            <div className="col-10 mx-auto col-md-6 my-3 ">
                                <h2>Model : {type} </h2>
                                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                    Made By : <span className="text-uppercase">
                                        {company}
                                    </span>
                                </h4>
                                <h4 className="text-purple">
                                <strong>
                                    PRICE : <span>$</span>
                                    {price}
                                </strong>
                                </h4>
                                <p className="font-weight-bold mt-3 mb-0"> Some information about the product:</p>
                                <p className="text-muted lead">{info}</p>
                                {/* buttons */}
                                <div>
                            <Link to='/'>
                                <ButtonContainer>
                                    Back To Products
                                </ButtonContainer>
                            </Link>
                            <ButtonContainer 
                            cartBtn
                            disabled={inCart?true:false}
                            onClick={()=>{
                                value.addToCart(id);
                                value.openModal(id);
                            }}>
                                {inCart?'in Cart':'Add to Cart'}
                            </ButtonContainer>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                );
                }}
            </ProductConsumer>
        );
    }
}