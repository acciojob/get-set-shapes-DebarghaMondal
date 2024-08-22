//complete this code
class Rectangle {
	constructor(width, height: number){
		this.width = width,
			this.height = height
	}
	getArea(){
		return this.width * this.height;
	}

	getPerimeter(){
		return this.width * 4;
	}
}

class Square extends Animal {
	constructor(side){
		super(side, side)
	}
}
let myRectangle  = new Rectangle(5, 10);
console.log(myRectangle.getArea());

let mySquare = new Square(7);
console.log(mySquare.getArea());

console.log(mySquare.getPerimeter());
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
