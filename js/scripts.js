// scripts.js

function Phone(index, brand, price, color, systemOp) {
    this.index = index;
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.systemOp = systemOp;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + 
		", color is " + this.color + 
		", the price is " + this.price + 
		" and the operating system is "+ this.systemOp + ".");
};

var SamsungGalaxyS6 = new Phone("0", "Samsung", 2000, "black", "Android 5.0 Lollipop");
var iPhone6S = new Phone("1", "Apple", 2250, "silver", "iOS 10");
var OnePlusOne = new Phone("2","OnePlus", 1800, "silver", "OxygenOS");

SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();



