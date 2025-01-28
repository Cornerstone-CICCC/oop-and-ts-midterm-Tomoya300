import { Component } from "../common/Component.js";
import { CartItem } from "./CartItem.js";

export class CartList extends Component {
  constructor(props) {
    super(props)
    this.state = { cart: [] }
    this.cartListElement = null
    this.totalPriceElement = null
    this.totalQuantityElement = null
    this.updateCart = this.updateCart.bind(this)
    this.props.cartContext.subscribe(this.updateCart)
    this.handleUpdateTotal = this.handleUpdateTotal.bind(this)
    this.props.cartContext.subscribe(this.handleUpdateTotal)
    this.handleUpdateTotalItems = this.handleUpdateTotalItems.bind(this)
    this.props.cartContext.subscribe(this.handleUpdateTotalItems)
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

  handleUpdateTotalItems() {
    this.props.cartContext.updateTotalItems()
    this.totalQuantityElement.innerHTML = ''
    this.totalQuantityElement.innerHTML = this.props.cartContext.totalItems
  }

  handleUpdateTotal() {
    this.props.cartContext.updateTotal()
    this.totalPriceElement.innerHTML = ''
    this.totalPriceElement.innerHTML = this.props.cartContext.total.toFixed(2)
  }

  render() {
    const cartElement = document.createElement('div')
    cartElement.className = 'cart-container'
    cartElement.innerHTML = `
      <div class='cart-icon'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
      </div>
      <div class='cart-main'>
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
        <table class='table-bottom'>
          <tr>
            <td colspan='4'>Total Items</td>
            <td class='total-items'>0</td>
          </tr>
          <tr>
            <td colspan='4'>Total Price</td>
            <td class='total-value'>0.00</td>
          </tr>
        </table>
      </div>
    `

    this.cartListElement = cartElement.querySelector('.cart-list-table')
    this.totalPriceElement = cartElement.querySelector('.total-value')
    this.totalQuantityElement = cartElement.querySelector('.total-items')

    return cartElement
  }
}