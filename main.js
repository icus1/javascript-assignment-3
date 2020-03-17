// constructor function for the regular rental properties
function property(type,name, price, rating, location, rooms, availability, features) {
  this.type = type;
  this.name = name;
  this.price = price;
  this.rating = rating;
  this.location = location;
  this.rooms = rooms;
  this.availability = availability;
  this.features = features;
};

// added on function using prototype property to display the information
// about the properties to the page
property.prototype.discription = function(){
  var paragraph = document.querySelector('body');
  let sentence = document.createElement('p');
  let node = document.createTextNode
  ("name: " + this.name + ", price: $" + this.price + " -rating: " + this.rating + ", location: " + this.location +
   ", " + this.rooms + ", " + this.features);
  sentence.appendChild(node);
  paragraph.appendChild(sentence);
}

// added on function using the prototype property to display
// the availability information about the property
property.prototype.available = function(){
  var paragraph = document.querySelector('body');
  let sentence = document.createElement('p');
  let availabilityNode = document.createTextNode(" -this property is " + this.availability);
  sentence.appendChild(availabilityNode);
  paragraph.appendChild(sentence);
}

// creating two instances of regular property objects
var thing = new property("none","moms house","500", "5/10", "toronto", "4 rooms", "fully open", "features include a pool");
var second = new property("none","dads house","500","5/10","toronto","4 rooms","fully open","features include a pool");

// calling all the discription functions for these two objects
thing.discription();
thing.available();
second.discription();
second.available();

// created function for the special rate properties
// this function sends to a method to calculate the reduced cost
// of the special rate
function specialRate(type,name,price,rating,location,rooms,availability,features){
  this.type = type;
  this.name = name;
  this.rating = rating;
  this.location = location;
  this.rooms = rooms;
  this.availability = availability;
  this.features = features;
  this.price = tests(price,rating,type);
}

// these two lines of code set up a way to make a new special rate property
// while also being able to use the functions in a normal property
// without having to use calls
specialRate.prototype= new property();
specialRate.prototype.constructor = specialRate;

// new special rate object
var test = new specialRate("special","uncles house", 200, "7/10", "toronto", "2 rooms", "occupied", "features include a pool table");

// using the main constructor functions on the special rate property
test.discription();
test.available();

// creating a superhost constructor - send sto the same method as the specialRate
// property to find the rating, a superhost gets a 10/10
function superhost(type,name,price,rating,location,rooms,availability,features){
  this.type = type;
  this.name = name;
  this.rating = tests(price,rating,type);
  this.location = location;
  this.rooms = rooms;
  this.availability = availability;
  this.features = features;
  this.price = price;
}

// this is the method that gives the special rate property is price and
// the super host property its rating
function tests(price,rating,type){
  if (type == "special"){
    return price = price * 0.8;
  }else if (type == "superhost"){
    return rating = "super host 10/10"
  }
}

// these two lines do the same as before but with the superhost property
// they allow me to use the main constructor functions with another constructor/object
superhost.prototype = new property();
superhost.prototype.constructor = superhost;

// creating a new suoperhost object and printing the discriptions to the screen
var test2 = new superhost("superhost","grandmas house","300","9/10","toronto","3 rooms","fully open","features include always full cookie jar");
test2.discription();
test2.available();
