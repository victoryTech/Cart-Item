import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor () {
        super();
        // default state
        this.state = {
            products: [
                {
                    price : 99,
                    title : 'Watch',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price : 999,
                    title : 'Mobile Phone',
                    qty: 10,
                    img: '',
                    id: 2
                },
                {
                    price : 9999,
                    title : 'PhoneLaptop',
                    qty: 4,
                    img: '',
                    id: 3
                }
            ]
        }
        // biinding the multiple event handler in construcor
        // bind is help to bind it to its refrernce
        // this.increaseQuantity = this.increaseQuantity.bind(this);
        // or we can use arrow function

        // this.testing();
    }
    render () {
        const { products } = this.state;
        return (
            <div className = "cart">
                {products.map( (product) => {
                    return <CartItem product = {product} key = {product.id} />
                })}
            </div>
        );
    }
} 

export default Cart;