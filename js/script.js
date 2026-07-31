class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue() {
        return this.price * this.quantity;
    }

    toString() {
        return `Product Name:  ${this.name} Price: ${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }
    // professor can you tell me where I can read more about (``) 
    //because I struggled find the problem

    static applyDiscount(products, discount) {
        product.forEach(product => {
            product.price = product.price * (1 - discount);
        });
    }
}
class PerishableProduct extends Product {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }
    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
}
class Store {
    constructor(){
        this.inventory = [];
    }
    addProduct(product){
        this.inventory.push(product)
    }
    getInventoryValue(){
        let total = 0;
        this.inventory.forEach(product=>{
            total+= product.getTotalValue();
        })
        return total;
    }
    findProductByName(name) {
        return this.inventory.find(product=> {
            return product.name.toLowerCase() === name.toLowerCase()})
            || null;
    }
}

const store = new Store();

const product1 = new Product("Pencil", 1.99, 4);
const product2 = new Product("Note Book", 2.50, 6);
const product3 = new Product("Eraser", 3.00, 2);
const product4 = new PerishableProduct("Milk", 3, 3, 2026-8-27);
const product4 = new PerishableProduct("Bread", 3, 3, 2026-8-3);
