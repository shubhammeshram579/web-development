
// declreation a class
class Product {
    constructor(itemsName,price,discount,productCode){
        this.itemsName = itemsName;
        this.price = price;
        this.discount = discount;
        this.productCode;
    
    }

}

let pensil = new Product("pensil",20,2,"P20");


// expretion in class
const Product1 = class Product {
    constructor(itemsName,price,discount,productCode){
        this.itemsName = itemsName;
        this.price = price;
        this.discount = discount;
        this.productCode;
    
    }

}


let chair = new Product1("Chail",1200,10,"C10");



// getter and setter
const Product2 = class Product {
    constructor(itemsName,price,discount,productCode){
        this.itemsName = itemsName;
        this.price = price;
        this.discount = discount;
        this.productCode;
    
    }
    get getDiscountValue(){
        return this.discount;
    }

    set setDiscountValue(Value){
        this.discount = Value;
    }
    // method Definition
    discountValue(){
        return this.discount * this.price / 100
    }


};


let chair1 = new Product2("Chail2",24000,20,"C30");


