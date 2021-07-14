import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    render () {
        const arr = [1, 2, 3, 4, 5];
        return (
            <div className="cart">
                {/* // CartItem is componenet */}
                {/* rendering all element of an array */}
                {/* {arr} */}
                {/* now increment all element by 5 */}
                {/* by maping we can do this -> this will give new array adding 5 with every element */}
                {/* thsi will give new array  */}
                { arr.map( (item) => {
                    return item + 5;
                })
                }
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
        );
    }
}

export default Cart;