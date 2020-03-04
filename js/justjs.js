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
            var hourly = Math.floor(randomCustomer(this.minCustomers, this.maxCustomers) * this.avgCookies);
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
            var hourly = Math.floor(randomCustomer(this.minCustomers, this.maxCustomers) * this.avgCookies);
            this.cookies.push(`${hours[i]}: ${hourly}`);
            total += hourly;
        }
        this.cookies.push('total: ' + total);
        console.log(this.cookies);
    },  
};

storeTwo.setCustomers();


var storeThree = {

    location: 'Dubai',
    minCustomers: 11,
    maxCustomers: 38,
    avgCookies: 3.7,
    cookies: [],

    setCustomers: function () {
        var total = 0;
        for (var i = 0; i < hours.length; i++) {
            var hourly = Math.floor(randomCustomer(this.minCustomers, this.maxCustomers) * this.avgCookies);
            this.cookies.push(`${hours[i]}: ${hourly}`);
            total += hourly;
        }
        this.cookies.push('total: ' + total);
        console.log(this.cookies);
    },  
};

storeThree.setCustomers();

var storeFour = {

    location: 'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    avgCookies: 2.3,
    cookies: [],

    setCustomers: function () {
        var total = 0;
        for (var i = 0; i < hours.length; i++) {
            var hourly = Math.floor(randomCustomer(this.minCustomers, this.maxCustomers) * this.avgCookies);
            this.cookies.push(`${hours[i]}: ${hourly}`);
            total += hourly;
        }
        this.cookies.push('total: ' + total);
        console.log(this.cookies);
    },  
};

storeFour.setCustomers();

var storeFive = {

    location: 'Lima',
    minCustomers: 2,
    maxCustomers: 16,
    avgCookies: 4.6,
    cookies: [],

    setCustomers: function () {
        var total = 0;
        for (var i = 0; i < hours.length; i++) {
            var hourly = Math.floor(randomCustomer(this.minCustomers, this.maxCustomers) * this.avgCookies);
            this.cookies.push(`${hours[i]}: ${hourly}`);
            total += hourly;
        }
        this.cookies.push('total: ' + total);
        console.log(this.cookies);
    },  
};

storeFive.setCustomers();

function randomCustomer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}




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

var parentElementThree = document.getElementById('dubai');

for(var k = 0; k < hours.length + 1; k++){
    var dubaiLI = document.createElement('li');
    dubaiLI.textContent = storeThree.cookies[k];
    parentElement.appendChild(dubaiLI);

}

var parentElementFour = document.getElementById('paris');

for(var l = 0; l < hours.length + 1; l++){
    var parisLI = document.createElement('li');
    parisLI.textContent = storeFour.cookies[l];
    parentElement.appendChild(parisLI);

}

var parentElementFive = document.getElementById('lima');

for(var k = 0; k < hours.length + 1; k++){
    var limaLI = document.createElement('li');
    limaLI.textContent = storeFive.cookies[k];
    parentElement.appendChild(limaLI);

}

console.log(storeOne.cookies);
console.log(storeTwo.cookies);
console.log(storeThree.cookies);
console.log(storeFour.cookies);
console.log(storeFive.cookies);
