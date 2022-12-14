// The parent class (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
class MyRectangle {
    // Think of the constructor as a method that runs right when the class is instantiated and takes the parameters that we pass into it when we instantiate the class 
    constructor(height, width, name) {
      // Creating class properties and assigning them to the values that are being passed in when we instantiate a new object with this class 
      this.name = name;
      this.height = height;
      this.width = width;
    }
    
    //  Class property. There are three access modifiers for class properties: public, private, protected. properties without a modifier default to public
    classProperty = 'A class property';
    
    // A regular class method   
    aClassMethod() {
      
    }
    
    // Static class methods can only be called on the class directly (Rectangle.sayName())   
    static sayName() {
      console.log('Hello, I am rectangle');
    }
    
    // A getter method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get   
    get area() {
      return this.height * this.width;
    }
    
    //  A setter method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
    set area(value) {
      this._area = value;
    }
  }
  
  // How you instantiate a new object from a class (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
  const myRectangle = new Rectangle(10, 10, 'Rectangle')
  
  // Inheritance: Square, the child class (also called the derived class), is inheriting properties from the parent class, rectangle (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
  class Square extends Rectangle {
    constructor(length) {
      // You use properties from the parent class using the `super` method. don't forget it has to be called first inside the constructor. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super     
      super(length, length);
      
      this.height;
      this.name = 'Square';
    }
  }
  
  const mySquare = new Square(10);
