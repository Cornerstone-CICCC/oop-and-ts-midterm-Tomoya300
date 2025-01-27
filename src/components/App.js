import { Component } from "../common/Component.js";
import { ProductList } from "./ProductList.js";

export class App extends Component {
  render() {
    const container = document.createElement('div')
    container.className = 'container'
    container.innerHTML = `
      <header></header>
      <div class="shop">
        <main>
          <div class="heading">
            <h1>My Charmmy Shop</h1>
          </div>
          <div id="wrapper-cart"></div>
        </main>
      </div>
      <footer></footer>
    `

    const productList = new ProductList({ cartContext: this.props.cartContext })
    // const cart = new CartList({ cartContext: this.props.cartContext }).render()

    // container.querySelector('#wrapper-products').appendChild(products)
    productList.mount(container.querySelector('main'))
    // container.querySelector('#wrapper-cart').appendChild(cart)

    return container;
  }
}