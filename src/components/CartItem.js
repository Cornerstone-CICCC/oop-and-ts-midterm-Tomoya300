import { Component } from "../common/Component.js";

export class CartItem extends Component {
  constructor(props) {
    super(props)
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleIncrement(id) {
    this.props.cartContext.incrementQuantity(id)
  }

  handleDecrement(id) {
    this.props.cartContext.decrementQuantity(id)
  }

  handleDelete(id) {
    this.props.cartContext.deleteItem(id)
  }

  render() {
    const cartItemElement = document.createElement('tr')
    cartItemElement.innerHTML = `
      <td>${this.props.item.id}</td>
      <td class="cart-title">
        <div>
          <img src=${this.props.item.image} alt="cart item" class="cart-image"/>
        </div>
        <div>${this.props.item.title}</div>
      </td>
      <td>$${this.props.item.price}</td>
      <td><button class="minus quantity-btn ${this.props.item.quantity === 1 ? '' : 'btn-hover'}" ${this.props.item.quantity === 1 ? 'disabled' : ''}>\u2013</button>${this.props.item.quantity}<button class="plus quantity-btn ${this.props.item.quantity === 99 ? '' : 'btn-hover'}" ${this.props.item.quantity === 99 ? 'disabled' : ''}>+</button></td>
      <td><button class="delete">Delete</button></td>
    `

    cartItemElement.querySelector('.plus').addEventListener('click', () => this.handleIncrement(this.props.item.id))
    cartItemElement.querySelector('.minus').addEventListener('click', () => this.handleDecrement(this.props.item.id))
    cartItemElement.querySelector('.delete').addEventListener('click', () => this.handleDelete(this.props.item.id))

    return cartItemElement
  }
}