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
          <h1>Charmmy</h1>
          <p>Welcome to our online store Charmmy – Where Your Shopping Dreams Come True!</p>
          <p>Discover a wide variety of products, from stylish clothes and everyday essentials to delicious foods, stunning jewelry, home appliances, and exciting video games.</p>
          <p class='desktop'>Enjoy competitive prices and occasional sales that make shopping even more delightful. Find what you need and fall in love with something new!</p>
          <div class='signin-btn'>
            <button>Sign in</button>
          </div>
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