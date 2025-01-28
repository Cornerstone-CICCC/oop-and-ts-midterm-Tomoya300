import { Component } from "../common/Component.js";

export class ProductItem extends Component {
  constructor(props) {
    super(props)
    this.handleAddProduct = this.handleAddProduct.bind(this)
  }

  handleAddProduct() {
    this.props.cartContext.addProduct(this.props.product)
  }

  render() {
    const product = document.createElement('div')
    product.className = 'product-card'

    const img = document.createElement('img')
    img.src = this.props.product.image
    product.appendChild(img)

    const title = document.createElement('h3')
    title.textContent = this.props.product.title
    product.appendChild(title)

    const id = document.createElement('span')
    id.textContent = `${this.props.product.id}: `
    title.prepend(id)

    const price = document.createElement('p')
    price.textContent = parseFloat(this.props.product.price)
    product.appendChild(price)

    const addButton = document.createElement('button')
    addButton.className = 'add-cart-btn'
    addButton.textContent = 'Add to Cart'
    product.appendChild(addButton)

    addButton.addEventListener('click', this.handleAddProduct)

    return product
  }
}