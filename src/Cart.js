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

    handleIncreaseQuantity = (product) => {
        console.log('Hey please increase the qty of', product);
        const { products } = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;

        this.setState({
            // products: products
            products
        })
    }

    handleDecreaseQuantity = (product) => {
        console.log('Hey please decrease the qty of', product);
        const { products } = this.state;
        const index = products.indexOf(product);

        if(products[index].qty === 0)
            return;

        products[index].qty -= 1;

        this.setState({
            products: products
        })
    }

    handleDeleteProduct = (id) => {
        const {products} = this.state;

        const items = products.filter((item) => item.id !== id);//[{}] retrurn array

        this.setState({
            products: items
        })
    }

    render () {
        const { products } = this.state;
        return (
            <div className = "cart">
                {products.map( (product) => {
                    return (
                    <CartItem 
                        product = {product}
                        key = {product.id}
                        onIncreaseQuantity = {this.handleIncreaseQuantity}
                        onDecreaseQuantity = {this.handleDecreaseQuantity}
                        onDeleteProduct = {this.handleDeleteProduct}
                    />
                    )
                })}
            </div>
        );
    }
} 

export default Cart;