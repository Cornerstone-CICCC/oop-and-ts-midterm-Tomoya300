import { Component } from "../common/Component.js";
import { ProductItem } from "./ProductItem.js";

export class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = { products: [] }
  }

  mount(container) {
    fetch(`https://fakestoreapi.com/products`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.state.products = data
        container.appendChild(this.render())
      })
      .catch(err => console.error(err))
  }

  render() {
    const productListElement = document.createElement('div')
    productListElement.className = 'product-container'
    // productListElement.innerHTML = `<div></div>` 

    this.state.products.forEach(product => {
      const productItem = new ProductItem({
        product,
        cartContext: this.props.cartContext
      })
      productListElement.appendChild(productItem.render())
    })

    return productListElement
  }
}