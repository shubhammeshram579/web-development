// declreation a class
class Product {
    constructor(itemsName){
        console.log("passaed  by Furniture " + itemsName); //i will check again
        this.itemsName = itemsName;
    }

    getItemName(){
        return this.itemsName + "Is a Product";
    }

}

class Furniture extends Product {
    constructor(itemsName){
        super(itemsName);
    }
    getItemName(){
        return this.itemsName + "Is a Furniture"
    }
}

let pensil1 = new Product("pensil4 ",13000,10,"f10");
let chair = new Furniture("chair ",15000,30,"f20");
