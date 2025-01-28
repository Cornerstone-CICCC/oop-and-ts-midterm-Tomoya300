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
    `

    this.cartListElement = cartElement.querySelector('.cart-list-table')
    this.totalPriceElement = cartElement.querySelector('.total-value')
    this.totalQuantityElement = cartElement.querySelector('.total-items')

    return cartElement
  }
}