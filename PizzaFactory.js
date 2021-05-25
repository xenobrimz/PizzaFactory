function pizzaOven(crustType, sauceType, cheese, toppings){
    var pizza = {}
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza
}


var p1 = pizzaOven("deep dish", "traditional",["mozzarella"], ["sausage", "pepperoni"])
var p2 = pizzaOven("hand tossed", "marinara",["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
var p3 = pizzaOven("deep dish", "traditional",["mozzarella"], ["pepperoni"])
var p4 = pizzaOven("stuffed crustd", "marinara",["mozzarella"], ["bacon bits", "pepperoni", "canadian bacon"])