//Create an object representing a rectangle and add methods to calculate its area and perimeter.

let rectangle={
    length:2,
    breadth:4,
    area(){
        return this.length*this.breadth;
    },
    perimeter(){
        return 2* (this.length+this.breadth);
    }
};
console.log(rectangle.area());
console.log(rectangle.perimeter());