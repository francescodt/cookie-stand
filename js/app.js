'use strict';
console.log('This is working how you would like it to.');

var customerArray = [];
var cookieArray = [];

var storeOne = {

    location: 'Seattle',
    minCust: 23,
    maxCust: 65,
    averageSale: 6.3,
    custNumHour: 0,
    setCustHour: function() {
        this.custNum = randomCustNum(23, 65);
    }


}


var storeTwo = {

    location: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    averageSale: 1.2,
    custNumHour: 0,
    setCustHour: function() {
        this.custNum = randomCustNum(3, 24);
    }

}


var storeThree = {

    location:'Dubai',
    minCust: 11,
    maxCust: 38,
    averageSale: 3.7,
    custNumHour: 0,
    setCustHour: function() {
        this.custNum = randomCustNum(11, 38);
    }

}


var storeFour = {

    location: 'Paris',
    minCust: 20,
    maxCust: 38,
    averageSale: 2.3,
    custNumHour: 0,
    setCustHour: function() {
        this.custNum = randomCustNum(20, 38);
    }

}


var storeFive = {

    location: 'Lima',
    minCust: 2,
    maxCust: 16,
    averageSale: 4.6,
    custHour: 0,
    setCustHour: function() {
        this.custHour.push(randomCustHour(2, 16));
    }
    

}

function randomCustHour(min, max) {
     Math.floor(Math.random() * (max - min + 1) + min);
}


// 14 positions 0-13
// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm'];

// var arrayLength = timeOfDay.length;
// var actualTime = [0];
// var i;
// var msg = '';

// for (i = 0; i < arrayLength; i++)
//     actualTime = (i + 1);

    

//actual html things
var parentElement = document.getElementById('storeProfile');

var article = document.createElement('article');
parentElement.appendChild(article);

var h2 = document.createElement('h2');
article.appendChild(h2);

var cookieInformation = document.createElement('p');
cookieInformation.textContent = 'I want to try this out.';
article.appendChild(cookieInformation);

