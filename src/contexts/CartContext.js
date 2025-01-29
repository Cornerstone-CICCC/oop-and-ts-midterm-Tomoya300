export class CartContext {
    static id = 1

    constructor() {
        this.cart = []
        this.listeners = []
        this.total = 0
        this.totalItems = 0
    }

    addProduct(product) {
        const found = this.cart.find(item => item.id === product.id)
        if (found) {
            this.cart = this.cart.map(item => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                } else {
                    return item
                }
            })
        } else {
            this.cart.push({
                ...product,
                quantity: 1
            })
        }
        this.notifyListeners()
        console.log(this.cart)
    }

    getCart() {
        return this.cart
    }

    deleteItem(id) {
        this.cart = this.cart.filter(item => item.id !== id)
        this.notifyListeners()
    }

    incrementQuantity(id) {
        const found = this.cart.find(item => item.id === id)
        if (found) {
            this.cart = this.cart.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                } else {
                    return item
                }
            })
        }
        this.notifyListeners()
    }

    decrementQuantity(id) {
        const found = this.cart.find(item => item.id === id)
        if (found) {
            this.cart = this.cart.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity
                    }
                } else {
                    return item
                }
            })
        }
        this.notifyListeners()
    }

    updateTotal() {
        this.total = this.cart.reduce((acc, product) => {
            return acc + (product.price*product.quantity)
        }, 0)

        console.log(this.total)
    }

    updateTotalItems() {
        this.totalItems = this.cart.reduce((acc, product) => {
            return acc + product.quantity
        }, 0)

        console.log(this.totalItems)
    }

    // createModal() {
    //     document.querySelector('.modal-open').addEventListener('click', () => {
    //         console.log('button clicked')
    //         const overlay = document.createElement('div')
    //         const modalContainer = document.createElement('div')
    //         const modalLeft = document.createElement('div')
    //         const modalRight = document.createElement('div')
    //         // const modalImg = document.querySelector('.product-img').cloneNode()
    //         // const modalTitle = document.querySelector('.product-title').cloneNode()
    //         // const modalDescription = document.querySelector('.product-desc').cloneNode()
    //         // const modalPrice = document.querySelector('.product-price').cloneNode()
    //         const modalImg = document.createElement('img')
    //         modalImg.src = this.state.products.image
      
    //         const modalTitle = document.createElement('h3')
    //         modalTitle.textContent = this.state.products.title
      
    //         const modalId = document.createElement('span')
    //         modalId.textContent = this.state.products.id
    //         modalTitle.prepend(modalId)
      
    //         const modalDescription = document.createElement('p')
    //         modalDescription.textContent = this.state.products.description
      
    //         const modalPrice = document.createElement('p')
    //         modalPrice.textContent = this.state.products.price
      
    //         overlay.className = 'overlay'
    //         modalContainer.className = 'modal-container'
    //         modalLeft.className = 'modal-left'
    //         modalRight.className = 'modal-right'
      
    //         modalLeft.appendChild(modalImg)
    //         modalRight.appendChild(modalTitle)
    //         modalRight.appendChild(modalDescription)
    //         modalRight.appendChild(modalPrice)
    //         modalContainer.appendChild(modalLeft)
    //         modalContainer.appendChild(modalRight)
    //         overlay.appendChild(modalContainer)
      
    //         document.body.appendChild(overlay)
    //       })
    // }

    subscribe(listener) {
        this.listeners.push(listener)
    }

    notifyListeners() {
        this.listeners.forEach(listener => listener(this.cart))
    }
}