// Exercises for learning about Object Oriented JavaScript: Part 1


// Question 1: Based on the Constructor function below. Create three Flower objects

function Flower(color, petals, smell){
    this.color = color;
    this.petals = petals;
    this.smellsPretty = smell;
}

let rose = new Flower("red", 12, true);
let sunflower = new Flower("yellow", 24, false);
let lavender = new Flower("purple", 8, true);

// Question 2: 
// Review the following code:

function Contact(name, email) {
  this.name = name;
  this.email = email;
 }

let myOtherContact = new Contact('Everest', 'everest@hello.com');
console.log(myOtherContact.name);
  

// What would be logged to the console when this code is run?

//Everest

// Question 3: 
// Given the following code:

function Animal(species, noise) {
  this.species = species;
  this.noise = noise;
  this.makeNoise = function() {
    console.log(this.noise + ", " + this.noise);
  }
}
// How would you create an instance of an Animal?

let cat = new Animal("Cat", "Meow");

// Calling the makeNoise method of the cat instance
cat.makeNoise(); // Output: Meow, Meow



// Question 4: TODO LIST EXERCISE

// Create a constructor for an object that holds the information for a Todo List. Each new object created by the constructor should have:

// A description of the task.
// An attribute to define if the task is done.
// A method to call when the task is done.


// Constructor function for TodoList objects
function todoList(description) {
  this.description = description;
  this.isDone = false;

  // Method to mark the task as done
  this.markAsDone = function() {
      this.isDone = true;
      console.log("Task '" + this.description + "' is marked as done.");
  };
}

// Creating a new TodoList object
var task1 = new todoList("Complete assignment");
var task2 = new todoList("Buy groceries");

// Marking the first task as done
task1.markAsDone();

// Create 3 objects with the constructor function

let task1 = new todoList("Complete assignment");
let task2 = new todoList("Buy groceries");
let task3 = new todoList("walk dogs")

//Question 5:
// Exercise: FinTech Project

// Create a constructor function for an "Account" with the following properties:
//    - accountNumber (a unique number for each account)
//    - accountHolder (name of the account holder)
//    - balance (initial balance, default to 0)
//    - deposit(amount) method that adds the specified amount to the balance
//    - withdraw(amount) method that subtracts the specified amount from the balance

// Constructor function for Account objects
function Account(accountNumber, accountHolder, balance) {
  this.accountNumber = accountNumber;
  this.accountHolder = accountHolder;
  this.balance = balance || 0; // Default balance to 0 if not provided
}

// Method to deposit specified amount to the balance
Account.prototype.deposit = function(amount) {
  this.balance += amount;
  console.log("Deposited $" + amount + " into account " + this.accountNumber + ". New balance: $" + this.balance);
};

// Method to withdraw specified amount from the balance
Account.prototype.withdraw = function(amount) {
  if (amount <= this.balance) {
      this.balance -= amount;
      console.log("Withdrawn $" + amount + " from account " + this.accountNumber + ". New balance: $" + this.balance);
  } else {
      console.log("Insufficient funds in account " + this.accountNumber + " to withdraw $" + amount);
  }
};

// Creating an Account object
var myAccount = new Account(123456789, "John Doe", 1000);

// Depositing and withdrawing amounts
myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.withdraw(1500); // Should display insufficient funds message

// Create two instances of the Account object and test the deposit and withdraw methods.
