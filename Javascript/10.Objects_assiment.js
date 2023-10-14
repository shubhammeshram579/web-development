// Exercise using objects
// itemName
// Prices
// discount
// itemcode


const Product = {
    itemName:"Mobile",
    price: 12000,
    discount: 10,
    itemCode: "F50"
}



// defind factory fuction 

function createProduct_1(itemName,price,discount,itemCode){
    return{
    itemName: itemName,
    price:  price,
    discount: discount,
    itemCode: itemCode
}
}


const football = createProduct_1("football",1000,10,"F40");



// constacter fuction

function Product_1(itemName,price,discount,itemCode){
    this.itemName  = name;
    this.price = price;
    this.discount = discount;
    this.itemCode = itemCode;   
}

const fruits = new Product_1("Apple",250,5,"F20");





//add dicecount prices product item by  constacter fuction

function Product_2(itemName,price,discount,itemCode){
    this.itemName  = name;
    this.price = price;
    this.discount = discount;
    this.itemCode = itemCode; 
    this.discountValue = function(){
        return price * discount/100;
    }  
}

const laptop = new Product_2("Dell",42000,10,"F232");



// output all prouct items
console.log(football);
console.log(fruits);
console.log(laptop);
console.log(laptop.discountValue());