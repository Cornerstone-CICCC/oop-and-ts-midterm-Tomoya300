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
    }

    updateTotalItems() {
        this.totalItems = this.cart.reduce((acc, product) => {
            return acc + product.quantity
        }, 0)
    }

    subscribe(listener) {
        this.listeners.push(listener)
    }

    notifyListeners() {
        this.listeners.forEach(listener => listener(this.cart))
    }
}