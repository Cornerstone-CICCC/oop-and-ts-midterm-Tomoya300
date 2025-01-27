export class CartContext {
    static id = 1

    constructor() {
        this.cart = []
        this.listeners = []
    }

    addProduct(product) {
        const found = this.cart.find(item => item.id === product.id)
        if (found) {
            this.cart = this.cart.map(item => {
                if (item.id === product.id) {
                    return {
                        ...item.quantity + 1
                    }
                } else {
                    return item
                }
            })
        } else {
            this.cart.push({
                ...item,
                quantity: 1
            })
        }
        this.notifyListeners()
    }

    getCart() {
        return this.cart
    }

    subscribe(listener) {
        this.listeners.push(listener)
    }

    notifyListeners() {
        this.listeners.forEach(listener => listener(this.cart))
    }
}