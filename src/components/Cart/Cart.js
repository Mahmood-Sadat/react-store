import React from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartItem from './CartItem';
import CartTotals from './CartTotals';
export class Cart extends React.Component {
    render(){
        return(
            <section>
                <ProductConsumer>
                    {value =>{
                        const {cart} = value;
                        if (cart.length>0) {
                            return (
                            <React.Fragment>
                                <Title name="your" title="cart"/>
                                <CartColumns/>
                                <CartList value={value}/>
                                <CartTotals value={value}/>
                            </React.Fragment>
                            )} else {
                                //don't forget to return components within return!
                               return (<EmptyCart/>) 
                            }
                    }}
                </ProductConsumer>
              
                

             
            </section>
        );
    }
}