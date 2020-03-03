'use strict';
console.log('This is working how you would like it to.');


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm'];

var storeOne = {

    location: 'Seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avgCookies: 6.3,
    cookies: [],

    setCustomers: function () {
        var total = 0;
        for (var i = 0; i < hours.length; i++) {
            var hourly = Math.floor(randomCustomer(this.minCustomers, this.maxCustomer) * this.avgCookies);
            this.cookies.push(`${hours[i]}: ${hourly}`);
            total += hourly;
        }
        this.cookies.push('total: ' + total);
        console.log(this.cookies);
    },  
};

storeOne.setCustomers();

var storeTwo = {

    location: 'Tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookies: 1.2,
    cookies: [],

    setCustomers: function () {
        var total = 0;
        for (var i = 0; i < hours.length; i++) {
            var hourly = Math.floor(randomCustomer(this.minCustomers, this.maxCustomer) * this.avgCookies);
            this.cookies.push(`${hours[i]}: ${hourly}`);
            total += hourly;
        }
        this.cookies.push('total: ' + total);
        console.log(this.cookies);
    },  
};


var storeThree = {

    location: 'Dubai',
    minCustomers: 11,
    maxCustomers: 38,
    avgCookies: 3.7,
    cookies: [],

    setCustomers: function () {
        var total = 0;
        for (var i = 0; i < hours.length; i++) {
            var hourly = Math.floor(randomCustomer(this.minCustomers, this.maxCustomer) * this.avgCookies);
            this.cookies.push(`${hours[i]}: ${hourly}`);
            total += hourly;
        }
        this.cookies.push('total: ' + total);
        console.log(this.cookies);
    },  
};


var storeFour = {

    location: 'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    avgCookies: 2.3,
    cookies: [],

    setCustomers: function () {
        var total = 0;
        for (var i = 0; i < hours.length; i++) {
            var hourly = Math.floor(randomCustomer(this.minCustomers, this.maxCustomer) * this.avgCookies);
            this.cookies.push(`${hours[i]}: ${hourly}`);
            total += hourly;
        }
        this.cookies.push('total: ' + total);
        console.log(this.cookies);
    },  
};


var storeFive = {

    location: 'Lima',
    minCustomers: 2,
    maxCustomers: 16,
    avgCookies: 4.6,
    cookies: [],

    setCustomers: function () {
        var total = 0;
        for (var i = 0; i < hours.length; i++) {
            var hourly = Math.floor(randomCustomer(this.minCustomers, this.maxCustomer) * this.avgCookies);
            this.cookies.push(`${hours[i]}: ${hourly}`);
            total += hourly;
        }
        this.cookies.push('total: ' + total);
        console.log(this.cookies);
    },  
};

function randomCustHour(min, max) {
    Math.floor(Math.random() * (max - min + 1) + min);
}




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


var parentMain = document.getElementById('seattle');

for(var i = 0; i < hours.length + 1; i++){
    var seattleLI = document.createElement('li');
    seattleLI.textContent = storeOne.cookies[i];
    parentElement.appendChild(seattleLI);

}


var parentElementTwo = document.getElementById('tokyo');

for(var j = 0; j < hours.length + 1; j++){
    var tokyoLI = document.createElement('li');
    tokyoLI.textContent = storeTwo.cookies[j];
    parentElement.appendChild(tokyoLI);

}

console.log(storeOne.cookies);
