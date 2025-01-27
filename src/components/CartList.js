import { Component } from "../common/Component";
import { CartItem } from "./CartItem";

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
    const cartItems = this.state.cart.map(item => `
        <tr>
          <td>${item.id}</td>
        </tr>
        <tr>
          <td>${item.title}</td>
        </tr>
        <tr>
          <td>${item.price}</td>
        </tr>
        <tr>
          <td>${item.quantity}</td>
        </tr>
      `
    )

    this.cartListElement.innerHTML = cartItems
  }

  render() {
    const cartElement = document.createElement('div')
    cartElement.className = 'cart-container'
    cartElement.innerHTML = `
      <h3>Cart</h3>
      <div class="cart-list">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody class="cart-list-table">
          </tbody>
        </table>
      </div>
    `

    this.cartListElement = cartElement.querySelector('.cart-list-table')

    return cartElement
  }
}