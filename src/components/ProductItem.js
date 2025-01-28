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
    // product.innerHTML = `
    //   <img src=${this.props.product.image}/>
    //   <h3>${this.props.product.title}</h3>
    //   <p>${parseFloat(this.props.product.price)}</p>
    //   <button class="add-cart-btn>Add to Cart</button>
    // `

    // product.querySelector('.add-cart-btn').addEventListener('click', this.handleAddProduct)

      // Create image element
    const img = document.createElement('img')
    img.src = this.props.product.image
    product.appendChild(img)

    // Create title element
    const title = document.createElement('h3')
    title.textContent = this.props.product.title
    product.appendChild(title)

    // Create ID element
    const id = document.createElement('span')
    id.textContent = `${this.props.product.id}: `
    title.prepend(id)

    // Create price element
    const price = document.createElement('p')
    price.textContent = parseFloat(this.props.product.price)
    product.appendChild(price)

    // Create button element
    const addButton = document.createElement('button')
    addButton.className = 'add-cart-btn'
    addButton.textContent = 'Add to Cart'
    product.appendChild(addButton)

    // Add event listener to the button
    addButton.addEventListener('click', this.handleAddProduct)

    return product
  }
}