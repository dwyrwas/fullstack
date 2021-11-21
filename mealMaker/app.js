const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
    },
  get appetizers() {
      return this._courses.appetizers;
    },
  set appetizers(dish) {
      this._courses.appetizers = dish;
    },
  get mains(){
      return this._courses.mains;
    },
  set mains(dish){
      this._courses.mains = dish;
    },
  get dessert(){
      return this._courses.desserts;
    },
  set desserts(dish){
      this._courses.desserts = dish;
    },
  get courses () {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    return dishes[Math.floor(Math.random()*dishes.length)]
  },
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price
    return `${appetizer.name} and ${main.name} and ${dessert.name}. Your check will be ${totalPrice}.`
  }
};

menu.addDishToCourse('appetizers', 'Caesar Salad',4.25);
menu.addDishToCourse('appetizers', 'Calamari',14.00);
menu.addDishToCourse('appetizers', 'Garlic Bread',3.00);
menu.addDishToCourse('mains','Spaghetti',13.00);
menu.addDishToCourse('mains','Steak', 26.00);
menu.addDishToCourse('mains','Roasted Chicken',18.00);
menu.addDishToCourse('desserts','Brownie',2.00);
menu.addDishToCourse('desserts','Ice Cream', 1.50);
menu.addDishToCourse('desserts','Key Lime Pie',3.00);
const meal = menu.generateRandomMeal();

console.log(meal);
