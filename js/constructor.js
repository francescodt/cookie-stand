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


var storesTable = document.getElementById('cookie-data');
var tableRow = document.createElement('tr');
var firstCell = document.createElement('td');
firstCell.textContent = 'blubber';
tableRow.appendChild(firstCell);
for (var i = 0; i < hours.length; i++) {
    var hoursCell = document.createElement('td');
    hoursCell.textContent = hours[i];
    tableRow.appendChild(hoursCell);
}

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

for (var i = 0; i < storesLocations.length; i++) {
    storesLocations[i].setCustomers();
    storesLocations[i].render();
}


var tableFooter = document.createElement('tr');

var totalRow = document.createElement('td');
totalRow.textContent = 'Total';
tableFooter.appendChild(totalRow);

var hourTotal = 0;
for (var i = 0; i < hours.length; i++) {
    hourTotal = 0;
    for (var j = 0; j < storesLocations.length; j++) {
        hourTotal += storesLocations[j].cookies[i];
    }
    var tableData = document.createElement('td');
    tableData.textContent = hourTotal;
    tableFooter.appendChild(tableData);
}

storesTable.appendChild(tableFooter);