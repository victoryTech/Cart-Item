import React from 'react';

class CartItem extends React.Component {
    constructor () {
        super();
        this.state = {
            price : 999,
            title : 'Phone',
            qty: 1,
            img: ''
        }
        // biinding the multiple event handler in construcor
        // bind is help to bind it to its refrernce
        // this.increaseQuantity = this.increaseQuantity.bind(this);
        // or we can use arrow function
    }

    // using arrow function to find the event lsitener function refremnce
    increaseQuantity = () => {
        console.log('this', this);
    }
    render () {
        // this is done coz we have to write this.state.title
        const { price, title, qty } = this.state;
      return (
        <div className="cart-item">
          <div className="left-block">
            <img style={styles.image} />
          </div>
          <div className="right-block">
            <div style={ { fontSize: 25 } }>{title}</div>
            <div style={ { color: '#777' } }>{price}</div>
            <div style={ { color: '#777' } }>{qty}</div>
            {/* <div>Phone</div> */}
            {/* <div>Rs 999</div> */}
            {/* <div>Qty: 1</div> */}
            <div className="cart-item-actions">
              {/* Buttons */}
              <img 
                alt="increase" 
                className="action-icons" 
                src="https://image.flaticon.com/icons/svg/992/992651.svg"
                // onClick={this.increaseQuantity.bind(this)}
                onClick={this.increaseQuantity}
              />
              <img 
                alt="decrease" 
                className="action-icons" 
                src="https://image.flaticon.com/icons/svg/1665/1665612.svg" 
              />
              <img 
                alt="delete" 
                className="action-icons" 
                src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
             />
            </div>
          </div>
        </div>
      );
    }
  }

  const styles = {
      image: {
          height: 110,
          width: 110,
          borderRTadius: 4,
          background: '#ccc'
      }
  }


  export default CartItem;