class Product {
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue(){
        return this.price * this.quantity;
    }

    toSting(){
        return `Product Name:  ${this.name} Price: ${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }
    // professor can you tell me where I can read more about (``) 
    //because I struggled find the problem

    


}