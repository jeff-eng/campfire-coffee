//Hours as an array
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

//Kiosk Constructor function
function Kiosk(name, minCustPerHr, maxCustPerHr, cupsPerCust, lbsPerCust) {
  this.name = name;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.cupsPerCust = cupsPerCust;
  this.lbsPerCust = lbsPerCust;
  this.customerPerHrArray = [];
  this.numCupsSoldArray = [];
  this.cupsToLbsArray = [];
  this.toGoLbsArray = [];
  this.totalLbsSoldPerHrArray = [];
  this.totalDailyLbs = 0;
};

//Add methods to constructor function
//**custPerHr Method**
Kiosk.prototype.custPerHr = function() {
        for (var i = 0; i < hours.length; i++) {
          this.customerPerHrArray.push(Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1) + this.minCustPerHr));
        }
       console.log(this.customerPerHrArray);
     }
//**numCupsSold Method**
Kiosk.prototype.numCupsSold = function() {
      for (var i = 0; i < hours.length; i++) {
        this.numCupsSoldArray.push(this.customerPerHrArray[i] * this.cupsPerCust);
      }
      console.log(this.numCupsSoldArray);
    }
//**cupsToLbs Method**
Kiosk.prototype.cupsToLbs = function() {
        for (var i = 0; i < hours.length; i++) {
          this.cupsToLbsArray.push(this.numCupsSoldArray[i] / 20);
        }
        console.log(this.cupsToLbsArray);
      }
//**toGoLbs Method**
Kiosk.prototype.toGoLbs = function() {
      for (var i = 0; i < hours.length; i++) {
        this.toGoLbsArray.push(this.lbsPerCust * this.customerPerHrArray[i]);
      }
      console.log(this.toGoLbsArray);
    }
//**totalLbsSoldPerHr Method**
Kiosk.prototype.totalLbsSoldPerHr = function() {
      for (var i = 0; i < hours.length; i++) {
        this.totalLbsSoldPerHrArray.push(this.cupsToLbsArray[i] + this.toGoLbsArray[i]);
      }
      console.log(this.totalLbsSoldPerHrArray);
    }
//**totalDailyLbs (for each location) Method**
Kiosk.prototype.totalDailyLbsMethod = function() {
      for (var i = 0; i < hours.length; i++) {
         this.totalDailyLbs += this.totalLbsSoldPerHrArray[i];
      }
}
//**render Method**
Kiosk.prototype.render = function() {
      this.custPerHr();
      this.numCupsSold();
      this.cupsToLbs();
      this.toGoLbs();
      this.totalLbsSoldPerHr();
      this.totalDailyLbsMethod();

      var ulEl = document.createElement('ul');
      ulEl.appendChild(document.createTextNode(this.name));
      for(var i = 0; i < hours.length; i++) {
        var liEl = document.createElement('li');
        //6:00am: 86.5 lbs [23 customers, 27.6 cups (1.4 lbs), 85.1 lbs to-go]
        liEl.textContent = hours[i] + ': ' + this.totalLbsSoldPerHrArray[i].toFixed(1) + ' lbs [' + this.customerPerHrArray[i] + ' customers, ' + this.numCupsSoldArray[i].toFixed(1) + ' cups (' + this.cupsToLbsArray[i].toFixed(1) + ' lbs), ' + this.toGoLbsArray[i].toFixed(1) + ' lbs to-go]';
        ulEl.appendChild(liEl);
      }
      document.body.appendChild(ulEl); //This takes the <ul> element and puts it in the body as child element
      liEl = document.createElement('li');
      liEl.textContent = 'TOTAL Daily Pounds At ' + this.name + ': ' + this.totalDailyLbs.toFixed(1) + ' lbs';
      ulEl.appendChild(liEl);
    }

//Create instances
var pikePlace = new Kiosk('Pike Place Market', 14, 55, 1.2, 3.7);
var capitolHill = new Kiosk('Capitol Hill', 32, 48, 3.2, 0.4);
var seaPubLib = new Kiosk('Seattle Public Library', 49, 75, 2.6, 0.2);
var sLakeUnion = new Kiosk('South Lake Union', 35, 88, 1.3, 3.7);
var seaTacAirport = new Kiosk('Sea-Tac Airport', 68, 124, 1.1, 2.7);
var websiteSales= new Kiosk('Website Sales', 3, 6, 0, 6.7);

//
pikePlace.render();
capitolHill.render();
seaPubLib.render();
sLakeUnion.render();
seaTacAirport.render();
websiteSales.render();

// var aggregateKioskSales = 0;
//
// var kiosks = [this.pikePlace, this.capitolHill, this.seaPubLib, this.sLakeUnion, this.seaTacAirport, this.websiteSales];
// for (var i = 0; i < kiosks.length; i++) {
//   kiosks[i].prototype.render();
//   aggregateKioskSales += kiosks[i].totalDailyLbs;
// }
// var h1El = document.createElement('h1');
// h1El.textContent = 'Total daily pounds of coffee for all locations is: ' + aggregateKioskSales.toFixed(1) + ' lbs.';
// document.body.appendChild(h1El);
