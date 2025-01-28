import { Component } from "../common/Component.js";
import { CartItem } from "./CartItem.js";

export class CartList extends Component {
  constructor(props) {
    super(props)
    this.state = { cart: [] }
    this.cartListElement = null
    this.updateCart = this.updateCart.bind(this)
    this.props.cartContext.subscribe(this.updateCart)
  }

  updateCart(cart) {
    this.state.cart = cart
    this.cartListElement.innerHTML = ''
    this.state.cart.forEach(item => {
      const cartItem = new CartItem({ 
        item,
        cartContext: this.props.cartContext
      })
      this.cartListElement.appendChild(cartItem.render())
    })
  }

  render() {
    const cartElement = document.createElement('div')
    cartElement.className = 'cart-container'
    cartElement.innerHTML = `
      <h3 class="cart-heading">Cart</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Delete Item</th>
          </tr>
        </thead>
        <tbody class="cart-list-table">
        </tbody>
      </table>
    `
    this.cartListElement = cartElement.querySelector('.cart-list-table')

    return cartElement
  }
}