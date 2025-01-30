import { Component } from "../common/Component.js";
import { ProductList } from "./ProductList.js";
import { CartList } from "./CartList.js";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";

export class App extends Component {
  render() {
    const container = document.createElement('div')
    container.className = 'container'
    container.innerHTML = `
      <header></header>
      <div class="shop">
        <div class="heading">
          <h1>Pretty Charmmy</h1>
          <p>Welcome to e-Shop Pretty Charmmy where you can find everything you want. We offer prenty of products from clothes, amenities, foods to jueries, appliance, video games, etc., with great price and sail occasionally. You will find something you want and something new that makes you want.</p>
        </div>
        <main>
          <h2 class='product-list-heading'>Best Sellers</h2>
        </main>
      </div>
      <footer></footer>
    `

    const header = new Header().render()
    const footer = new Footer().render()

    container.querySelector('header').appendChild(header)
    container.querySelector('footer').appendChild(footer)

    const productList = new ProductList({ cartContext: this.props.cartContext })
    const cart = new CartList({ cartContext: this.props.cartContext }).render()

    productList.mount(container.querySelector('main'))
    container.querySelector('main').appendChild(cart)

    return container;
  }
}