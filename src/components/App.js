import { Component } from "../common/Component.js";
import { ProductList } from "./ProductList.js";
import { CartList } from "./CartList.js";

export class App extends Component {
  render() {
    const container = document.createElement('div')
    container.className = 'container'
    container.innerHTML = `
      <header></header>
      <div class="shop">
        <div class="heading">
          <h1>My Charmmy Shop</h1>
        </div>
        <main>
        </main>
      </div>
      <footer></footer>
    `

    const productList = new ProductList({ cartContext: this.props.cartContext })
    const cart = new CartList({ cartContext: this.props.cartContext }).render()

    productList.mount(container.querySelector('main'))
    container.querySelector('main').appendChild(cart)

    return container;
  }
}