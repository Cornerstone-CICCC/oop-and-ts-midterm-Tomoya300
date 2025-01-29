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

    const modalOpen = document.createElement('div')
    modalOpen.className = 'modal-open'

    const img = document.createElement('img')
    img.src = this.props.product.image
    img.className = 'product-img'

    const title = document.createElement('h3')
    title.className = 'product-title'
    title.textContent = this.props.product.title

    const id = document.createElement('span')
    id.textContent = `${this.props.product.id}: `
    id.className = 'product-id'
    title.prepend(id)

    const description = document.createElement('p')
    description.className = 'product-desc'
    description.textContent = this.props.product.description

    const price = document.createElement('p')
    price.className = 'product-price'
    price.textContent = `$${parseFloat(this.props.product.price).toFixed(2)}`
    
    modalOpen.appendChild(img)
    modalOpen.appendChild(title)
    modalOpen.appendChild(description)
    modalOpen.appendChild(price)
    product.appendChild(modalOpen)

    const addButton = document.createElement('button')
    addButton.className = 'add-cart-btn'
    addButton.textContent = 'Add to Cart'
    product.appendChild(addButton)

    modalOpen.addEventListener('click', () => {
      console.log('button clicked')
      const overlay = document.createElement('div')
      const modalContainer = document.createElement('div')
      const modalLeft = document.createElement('div')
      const modalRight = document.createElement('div')
      const modalImg = product.querySelector('.product-img').cloneNode()
      const modalTitle = product.querySelector('.product-title').cloneNode()
      const modalDescription = product.querySelector('.product-desc').cloneNode()
      const modalPrice = product.querySelector('.product-price').cloneNode()

      overlay.className = 'overlay'
      modalContainer.className = 'modal-container'
      modalLeft.className = 'modal-left'
      modalRight.className = 'modal-right'

      modalLeft.appendChild(modalImg)
      modalRight.appendChild(modalTitle)
      modalRight.appendChild(modalDescription)
      modalRight.appendChild(modalPrice)
      modalContainer.appendChild(modalLeft)
      modalContainer.appendChild(modalRight)
      overlay.appendChild(modalContainer)

      document.body.appendChild(overlay)
    })

    addButton.addEventListener('click', this.handleAddProduct)

    return product
  }
}