import { Component } from "../common/Component.js";

export class ProductItem extends Component {
  constructor(props) {
    super(props)
    this.handleAddProduct = this.handleAddProduct.bind(this)
  }

  handleAddProduct() {
    this.props.cartContext.addProduct(this.props.product)
  }

  updateRating() {
    const stars = document.querySelectorAll('.star')
    stars.forEach((star, index) => {

    })
  }

  render() {
    const product = document.createElement('div')
    product.className = 'product-card'

    const modalOpen = document.createElement('div')
    modalOpen.className = 'modal-open'

    const imgBox = document.createElement('div')
    imgBox.className = 'img-box'
    const img = document.createElement('img')
    img.src = this.props.product.image
    img.className = 'product-img'
    imgBox.appendChild(img)

    const title = document.createElement('h3')
    title.className = 'product-title'
    title.textContent = this.props.product.title

    const id = document.createElement('span')
    id.textContent = `${this.props.product.id}: `
    id.className = 'product-id'
    title.prepend(id)

    const category = document.createElement('p')
    category.className = 'category hide-categ'
    category.textContent = this.props.product.category

    const description = document.createElement('p')
    description.className = 'product-desc hide-desc'
    description.textContent = this.props.product.description

    const rateBox = document.createElement('div')
    rateBox.className = 'rate-box'

    const itemRate = this.props.product.rating.rate.toFixed(1)

    const ratignNum = document.createElement('p')
    ratignNum.className = 'rating-num'
    ratignNum.textContent = itemRate

    const starBox = document.createElement('div')
    starBox.className = 'star-box'
    
    const rateHead = document.createElement('span')
    rateHead.className = 'rate-head'
    rateHead.textContent = 'Rate: '
    
    const denominator = document.createElement('spna')
    denominator.className = 'denominator'
    denominator.textContent = `(${this.props.product.rating.count})`

    for (let i = 0; i < 5; i++) {
      const star = document.createElement('span')
      star.className = 'star'
      star.textContent = ' \u2605'

      star.classList.toggle("star-filled", i < Math.floor(itemRate));

      if (i === Math.floor(itemRate) && itemRate%1 !== 0) {
        star.style.background = `linear-gradient(to right, gold ${itemRate%1*100}%, #b3b3b3 ${itemRate%1*100}%)`
        star.style.backgroundClip ='text'
        star.style.color = 'transparent'
      }
      starBox.appendChild(star)
    }

    starBox.appendChild(ratignNum)
    rateBox.appendChild(rateHead)
    rateBox.appendChild(starBox)
    rateBox.appendChild(denominator)

    const price = document.createElement('p')
    price.className = 'product-price'
    price.textContent = `$${parseFloat(this.props.product.price).toFixed(2)}`
    
    modalOpen.appendChild(imgBox)
    modalOpen.appendChild(title)
    modalOpen.appendChild(category)
    modalOpen.appendChild(description)
    modalOpen.appendChild(rateBox)
    modalOpen.appendChild(price)
    product.appendChild(modalOpen)

    const addButton = document.createElement('button')
    addButton.className = 'add-cart-btn'
    addButton.textContent = 'Add to Cart'
    product.appendChild(addButton)

    addButton.addEventListener('click', this.handleAddProduct)

    const modalClose = document.createElement('div')
    const closeSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    svgPath.setAttribute('d', 'M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z')

    modalClose.className = 'modal-close'
    closeSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    closeSvg.setAttribute('viewBox', '0 0 384 512')
    closeSvg.appendChild(svgPath)
    modalClose.appendChild(closeSvg)

    modalOpen.addEventListener('click', (e) => {
      e.stopPropagation()
      console.log('button clicked')
      const overlay = document.createElement('div')
      const modalContainer = document.createElement('div')
      const modalLeft = document.createElement('div')
      const modalRight = document.createElement('div')
      const descHeading = document.createElement('p')
      const modalCategBox = document.createElement('div')
      const categHead = document.createElement('p')
      const modalImg = product.querySelector('.product-img').cloneNode(true)
      const modalTitle = product.querySelector('.product-title').cloneNode(true)
      const modalDescription = product.querySelector('.product-desc').cloneNode(true)
      const modalCategory = product.querySelector('.category').cloneNode(true)
      const modalRateBox = product.querySelector('.rate-box').cloneNode(true)
      const modalPrice = product.querySelector('.product-price').cloneNode(true)
      const modalAddBtn = product.querySelector('.add-cart-btn').cloneNode(true)

      overlay.className = 'overlay'
      modalContainer.className = 'modal-container'
      modalLeft.className = 'modal-left'
      modalRight.className = 'modal-right'
      modalTitle.className = 'modal-title'
      descHeading.className = 'caption'
      modalDescription.className = 'modal-desc'
      modalCategBox.className = 'modal-categ-box'
      categHead.classname = 'categ-head'
      modalCategory.className = 'modal-categ'
      modalAddBtn.className = 'add-cart-btn'

      descHeading.textContent = 'Description'
      categHead.textContent = 'Category: '
      modalCategBox.appendChild(categHead)
      modalCategBox.appendChild(modalCategory)
    
      modalLeft.appendChild(modalImg)
      modalRight.appendChild(modalTitle)
      modalRight.appendChild(descHeading)
      modalRight.appendChild(modalDescription)
      modalRight.appendChild(modalCategBox)
      modalRight.appendChild(modalRateBox)
      modalRight.appendChild(modalPrice)
      modalRight.appendChild(modalAddBtn)
      modalContainer.appendChild(modalLeft)
      modalContainer.appendChild(modalRight)
      modalContainer.appendChild(modalClose)
      overlay.appendChild(modalContainer)

      modalAddBtn.addEventListener('click', this.handleAddProduct)

      document.body.appendChild(overlay)
    })

    modalClose.addEventListener('click', () => {
      const overlay = document.querySelector('.overlay')
      if(overlay) {
        overlay.remove()
      }
    })

    document.addEventListener('click', (e) => {
        const overlay = document.querySelector('.overlay')
        if (overlay && !e.target.closest('.modal-container')) {
            overlay.remove()
        }
    })

    return product
  }
}