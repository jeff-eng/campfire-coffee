var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

var locations = ['Pike Place Market', 'Capitol Hill', 'Seattle Public Library', 'South Lake Union', 'Sea-Tac Airport', 'Website Sales'];

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
Kiosk.prototype.populateArrays = function() {

        for (var i = 0; i < hours.length; i++) {
          this.customerPerHrArray.push(Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1) + this.minCustPerHr));
          this.numCupsSoldArray.push(this.customerPerHrArray[i] * this.cupsPerCust);
          this.cupsToLbsArray.push(this.numCupsSoldArray[i] / 20);
          this.toGoLbsArray.push(this.lbsPerCust * this.customerPerHrArray[i]);
          this.totalLbsSoldPerHrArray.push(this.cupsToLbsArray[i] + this.toGoLbsArray[i]);
          this.totalDailyLbs += this.totalLbsSoldPerHrArray[i];
        }
       console.log(this.customerPerHrArray);
     }

//Create instances
var pikePlace = new Kiosk('Pike Place Market', 14, 55, 1.2, 3.7);
var capitolHill = new Kiosk('Capitol Hill', 32, 48, 3.2, 0.4);
var seaPubLib = new Kiosk('Seattle Public Library', 49, 75, 2.6, 0.2);
var sLakeUnion = new Kiosk('South Lake Union', 35, 88, 1.3, 3.7);
var seaTacAirport = new Kiosk('Sea-Tac Airport', 68, 124, 1.1, 2.7);
var websiteSales= new Kiosk('Website Sales', 3, 6, 0, 6.7);

//Create function to render data into table format
function renderTable(location) {
  //Create first row with location and each hour
  var tableEl = document.createElement('table'); //Create table element
  document.body.appendChild(tableEl);  //Append table element to DOM
  var trEl = document.createElement('tr'); //Create table row element
  tableEl.appendChild(trEl);  //Append table row element to table element


  var thEl = document.createElement('th');  //Create empty table heading
  trEl.appendChild(thEl);  //Append table data to table row
  thEl.textContent = location.name;

  for(var i = 0; i < hours.length; i++) {  //Loop to create table headings for the hours

    var thEl = document.createElement('th'); //Create table heading
    trEl.appendChild(thEl);      //Append table heading to DOM
    thEl.textContent = hours[i];  //Give the table heading text content
  }

  location.populateArrays();

    var thEl = document.createElement('th');  //Create empty table heading
    var newTr = document.createElement('tr');
    tableEl.appendChild(newTr);
    newTr.appendChild(thEl);  //Append table data to table row
    thEl.textContent = '[Customers]';

    for(var i = 0; i < location.customerPerHrArray.length; i++) {

      var tdEl = document.createElement('td');
      tdEl.textContent = location.customerPerHrArray[i];
      newTr.appendChild(tdEl);
    }
//**************
    var thEl = document.createElement('th');  //Create empty table heading
    var newTr = document.createElement('tr');
    tableEl.appendChild(newTr);
    newTr.appendChild(thEl);  //Append table data to table row
    thEl.textContent = '[Cups Sold (lbs)]';

    for(var i = 0; i < location.customerPerHrArray.length; i++) {  //Loop to create table headings for the hours

      var tdEl = document.createElement('td');
      tdEl.textContent = Math.ceil(location.numCupsSoldArray[i]) + '(' + location.cupsToLbsArray[i].toFixed(1) + ')';
      newTr.appendChild(tdEl);
    }
//***************
    var thEl = document.createElement('th');  //Create empty table heading
    var newTr = document.createElement('tr');
    tableEl.appendChild(newTr);
    newTr.appendChild(thEl);  //Append table data to table row
    thEl.textContent = '[To-Go lbs]';

    for(var i = 0; i < location.customerPerHrArray.length; i++) {  //Loop to create table headings for the hours

      var tdEl = document.createElement('td');
      tdEl.textContent = location.toGoLbsArray[i].toFixed(1);
      newTr.appendChild(tdEl);
    }
//*****************
    var thEl = document.createElement('th');  //Create empty table heading
    var newTr = document.createElement('tr');
    tableEl.appendChild(newTr);
    newTr.appendChild(thEl);  //Append table data to table row
    thEl.textContent = '[Total lbs]';

    for(var i = 0; i < location.customerPerHrArray.length; i++) {  //Loop to create table headings for the hours

      var tdEl = document.createElement('td');
      tdEl.textContent = location.totalLbsSoldPerHrArray[i].toFixed(1);
      newTr.appendChild(tdEl);
    }
//*****************
    var thEl = document.createElement('th'); //Creates table heading
    var newTr = document.createElement('tr'); //Creates table row
    tableEl.appendChild(newTr);  //Appends table row to the table
    newTr.appendChild(thEl);  //Appends table heading to the table row
    thEl.textContent = '[Daily Total lbs]:';

    var tdEl = document.createElement('td');
    newTr.appendChild(tdEl);
    tdEl.textContent = this.totalDailyLbs;

    var brEl = document.createElement('br');  //Create line break
    document.body.appendChild(brEl);

}
var allKiosks = [pikePlace, capitolHill, seaPubLib, sLakeUnion, seaTacAirport, websiteSales];

function renderTables() {
  for (var i=0; i<allKiosks.length; i++){
    renderTable(allKiosks[i]);
  }
}

renderTables();

var newKiosk = document.getElementById('newKiosk');
newKiosk.addEventListener('submit', addNewKiosk);

function addNewKiosk(event) {
  console.log(event);
  event.preventDefault();

  var storeName = event.target.storeName.value;
  var minCust = event.target.minCust.value;
  var maxCust = event.target.maxCust.value;
  var avgCups = event.target.avgCups.value;
  var avgPnds = event.target.avgPnds.value;

  var eventKiosk = new Kiosk(storeName, minCust, maxCust, avgCups, avgPnds);
  renderTable(eventKiosk);
}


//Aggregate Kiosk Sales
// var aggregateKioskSales = 0; //Initialize to zero

// var kiosks = [this.pikePlace, this.capitolHill, this.seaPubLib, this.sLakeUnion, this.seaTacAirport, this.websiteSales]; //Array of kiosk objects
// for (var i = 0; i < kiosks.length; i++) {
//   kiosks[i].render();
//   aggregateKioskSales += kiosks[i].totalDailyLbs;
// }
// var h1El = document.createElement('h1');
// h1El.textContent = 'Total daily pounds of coffee for all locations is: ' + aggregateKioskSales.toFixed(1) + ' lbs.';
// document.body.appendChild(h1El);

//**numCupsSold Method**
// Kiosk.prototype.numCupsSold = function() {
//       for (var i = 0; i < hours.length; i++) {
//         this.numCupsSoldArray.push(this.customerPerHrArray[i] * this.cupsPerCust);
//       }
//       console.log(this.numCupsSoldArray);
//     }
//**cupsToLbs Method**
// Kiosk.prototype.cupsToLbs = function() {
//         for (var i = 0; i < hours.length; i++) {
//           this.cupsToLbsArray.push(this.numCupsSoldArray[i] / 20);
//         }
//         console.log(this.cupsToLbsArray);
//       }
//**toGoLbs Method**
// Kiosk.prototype.toGoLbs = function() {
//       for (var i = 0; i < hours.length; i++) {
//         this.toGoLbsArray.push(this.lbsPerCust * this.customerPerHrArray[i]);
//       }
//       console.log(this.toGoLbsArray);
//     }
//**totalLbsSoldPerHr Method**
// Kiosk.prototype.totalLbsSoldPerHr = function() {
//       for (var i = 0; i < hours.length; i++) {
//         this.totalLbsSoldPerHrArray.push(this.cupsToLbsArray[i] + this.toGoLbsArray[i]);
//       }
//       console.log(this.totalLbsSoldPerHrArray);
//     }
//**totalDailyLbs (for each location) Method**
// Kiosk.prototype.totalDailyLbsMethod = function() {
//       for (var i = 0; i < hours.length; i++) {
//          this.totalDailyLbs += this.totalLbsSoldPerHrArray[i];
//       }
// }
//**render Method**
// Kiosk.prototype.render = function() {
//       this.custPerHr();
//       this.numCupsSold();
//       this.cupsToLbs();
//       this.toGoLbs();
//       this.totalLbsSoldPerHr();
//       this.totalDailyLbsMethod();

//   var ulEl = document.createElement('ul');
//   ulEl.appendChild(document.createTextNode(this.name));
//   for(var i = 0; i < hours.length; i++) {
//     var liEl = document.createElement('li');
//     //6:00am: 86.5 lbs [23 customers, 27.6 cups (1.4 lbs), 85.1 lbs to-go]
//     liEl.textContent = hours[i] + ': ' + this.totalLbsSoldPerHrArray[i].toFixed(1) + ' lbs [' + this.customerPerHrArray[i] + ' customers, ' + this.numCupsSoldArray[i].toFixed(1) + ' cups (' + this.cupsToLbsArray[i].toFixed(1) + ' lbs), ' + this.toGoLbsArray[i].toFixed(1) + ' lbs to-go]';
//     ulEl.appendChild(liEl);
//   }
//   document.body.appendChild(ulEl); //This takes the <ul> element and puts it in the body as child element
//   liEl = document.createElement('li');
//   liEl.textContent = 'TOTAL Daily Pounds At ' + this.name + ': ' + this.totalDailyLbs.toFixed(1) + ' lbs';
//   ulEl.appendChild(liEl);
// }
