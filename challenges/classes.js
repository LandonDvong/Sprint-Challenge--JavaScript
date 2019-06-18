// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CuboidMaker {
    constructor(att) {
       this.length = att.length;
       this.width = att.width;
       this.height = att.height; 
    }
    volume () {
       return (this.width * this.length * this.height);
    }
    surfaceArea () {
       let vari = ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
       return (vari * 2)
    }
}

const cuboid = new CuboidMaker ({
   length: 4,
   width: 5,
   height: 5,
    });

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130