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

    this.state.products.forEach(product => {
      const productItem = new ProductItem({
        product,
        cartContext: this.props.cartContext
      })
      productListElement.appendChild(productItem.render())
    })

    // document.querySelector('.modal-open').addEventListener('click', () => {
    //   console.log('button clicked')
    //   const overlay = document.createElement('div')
    //   const modalContainer = document.createElement('div')
    //   const modalLeft = document.createElement('div')
    //   const modalRight = document.createElement('div')
    //   // const modalImg = document.querySelector('.product-img').cloneNode()
    //   // const modalTitle = document.querySelector('.product-title').cloneNode()
    //   // const modalDescription = document.querySelector('.product-desc').cloneNode()
    //   // const modalPrice = document.querySelector('.product-price').cloneNode()
    //   const modalImg = document.createElement('img')
    //   modalImg.src = this.state.products.image

    //   const modalTitle = document.createElement('h3')
    //   modalTitle.textContent = this.state.products.title

    //   const modalId = document.createElement('span')
    //   modalId.textContent = this.state.products.id
    //   modalTitle.prepend(modalId)

    //   const modalDescription = document.createElement('p')
    //   modalDescription.textContent = this.state.products.description

    //   const modalPrice = document.createElement('p')
    //   modalPrice.textContent = this.state.products.price

    //   overlay.className = 'overlay'
    //   modalContainer.className = 'modal-container'
    //   modalLeft.className = 'modal-left'
    //   modalRight.className = 'modal-right'

    //   modalLeft.appendChild(modalImg)
    //   modalRight.appendChild(modalTitle)
    //   modalRight.appendChild(modalDescription)
    //   modalRight.appendChild(modalPrice)
    //   modalContainer.appendChild(modalLeft)
    //   modalContainer.appendChild(modalRight)
    //   overlay.appendChild(modalContainer)

    //   document.body.appendChild(overlay)
    // })

    return productListElement
  }
}