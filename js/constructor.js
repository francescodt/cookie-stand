'use strict';
console.log('This is much easier.');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

function randomCus(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}

function Stores(name, minCus, maxCus, averageSales) {
    this.name = name;
    this.minCus = minCus;
    this.maxCus = maxCus;
    this.averageSales = averageSales;
    this.cookies = [];

}

Stores.prototype.setCustomers = function () {
    var total = 0;
    for (var i = 0; i < hours.length; i++) {
        var hourly = Math.floor(randomCus(this.minCus, this.maxCus) * this.averageSales);
        this.cookies.push(hourly);
        total += hourly;
    }
    this.cookies.push(total);
    console.log(this.cookies);

}


var seattle = new Stores('Seattle', 23, 65, 6.3);
var tokyo = new Stores('Tokyo', 3, 24, 1.2);
var dubai = new Stores('Dubai', 11, 38, 3.7);
var paris = new Stores('Paris', 20, 38, 2.3);
var lima = new Stores('Lima', 2, 16, 4.6);



//Table
var storesTable = document.getElementById('sales');
var tableRow = document.createElement('tr');
var firstCell = document.createElement('td');
firstCell.textContent = ' ';
tableRow.appendChild(firstCell);
for (var i = 0; i < hours.length; i++) {
    var hoursCell = document.createElement('td');
    hoursCell.textContent = hours[i];
    tableRow.appendChild(hoursCell);
}

var lastCell = document.createElement('td');
lastCell.textContent = 'Total of Totals';
tableRow.appendChild(lastCell);

storesTable.appendChild(tableRow);

Stores.prototype.render = function () {

    var storesRow = document.createElement('tr');
    var nameCell = document.createElement('td');
    nameCell.textContent = this.name;
    storesRow.appendChild(nameCell);

    for (var i = 0; i < this.cookies.length; i++) {
        var cookieCell = document.createElement('td');
        cookieCell.textContent = this.cookies[i];
        storesRow.appendChild(cookieCell);
    }


    storesTable.appendChild(storesRow);


};


var storesLocations = [seattle, tokyo, dubai, paris, lima]

//loop
for (var i = 0; i < storesLocations.length; i++) {
    storesLocations[i].setCustomers();
    storesLocations[i].render();
}

//Footer
var tableFooter = document.createElement('tr');

//first row
var totalRow = document.createElement('td');
totalRow.textContent = 'Total';
tableFooter.appendChild(totalRow);

//math total
var hourTotal = 0;
for (var i = 0; i < hours.length + 1; i++) {
    hourTotal = 0;
    for (var j = 0; j < storesLocations.length; j++) {
        hourTotal += storesLocations[j].cookies[i];
    }
    var tableData = document.createElement('td');
    tableData.textContent = hourTotal;
    tableFooter.appendChild(tableData);
}

storesTable.appendChild(tableFooter);


//new form stuff below //

// still to do
//call function to keep total at bottom

// take in an event parameter so that we can prevent the default
function handleFormSubmitted(event){
    event.preventDefault();
    console.log(event);

    var name = document.getElementById('name').value
    var minCus = document.getElementById('minCus').value
    var maxCus = document.getElementById('maxCus').value
    var averageSales = document.getElementById('averageSales').value


    var stores = new Stores(name, minCus, maxCus, averageSales);

    stores.setCustomers();
    stores.render();

    var form = document.getElementById('newCity');
    form.reset();


}

var formElement = document.getElementById('newCity');

formElement.addEventListener('submit', handleFormSubmitted);








////////////////////////
//add array to the constructor function

// set up event listener to listen to the submit event
//1. Which element do we need

//2. Which event am I listening to?


//3. What code should I run when that event happens?

// // take in an event parameter so that we can prevent the default
// function handleFormSubmitted(event){
//     event.preventDefault();
//     console.log(event);


// var nameInput = doument.getElementById('firstsectionformanswer1')
// var nameValue = nameInput['value'];
// var breedInput = document.getElementById('secondsectionformanswers2');
// var breedValue = breedInput['value'];
// var otherInput = document.getElementById('thirdsectionformanswers3');
// var otherValue = otherInput.value;
// var interestsInput = document.getElementById('fourhtsectionformanswer4');
// var interestsValue = interestsInput.value;


// //add in checkbox values
// var isGoodWithKids = event.target.isGoodWithKids.checked;
// var isGoodwithDogs = event.target.isGoodwithDogs.checked;

// var newPet = new newPet(nameValue, breedValue, otherValue, interestsValue, isGoodWithKids, isGoodwithDogs);

//newPet.setAge();
//newPet.render();
//newpet.getInterests();

// //add array to the constructor function
// newPet.allPets.push(this);
// newPet.allPets = [];


// var form?????

// }

// // set up event listener to listen to the submit event
// //1. Which element do we need
// var formElement = document.getElementById('new-pets');

// //2. Which event am I listening to?


// //3. What code should I run when that event happens?
// formElement.addEventListener('subtmit', handleFormSubmitted);
