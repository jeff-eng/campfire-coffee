//Location as objects
var pikePlace = {
  minCustPerHr: 14,
  maxCustPerHr: 55,
  cupsPerCust: 1.2,
  lbsPerCust: 3.7,
};

var capitolHill = {
  minCustPerHr: 32,
  maxCustPerHr: 48,
  cupsPerCust: 3.2,
  lbsPerCust: 0.4,
};

var seaPubLib = {
  minCustPerHr: 49,
  maxCustPerHr: 75,
  cupsPerCust:  2.6,
  lbsPerCust: 0.2,
};

var sLakeUnion = {
  minCustPerHr: 35,
  maxCustPerHr: 88,
  cupsPerCust: 1.3,
  lbsPerCust: 3.7,
  hourlyCustomers: function() {
    return Math.floor(Math.random() * this.maxCustPerHr - this.minCustPerHr + 1) + minCustPerHr;
    console.log(hourlyCustomers);
  }
};

var seaTacAirport = {
  minCustPerHr: 68,
  maxCustPerHr: 124,
  cupsPerCust: 1.1,
  lbsPerCust: 2.7,
  hourlyCustomers: function(minCustPerHr, maxCustPerHr) {
    return Math.floor(Math.random() * this.maxCustPerHr - this.minCustPerHr + 1) + minCustPerHr;
    console.log(hourlyCustomers);
  };
};

var websiteSales = {
  minCustPerHr: 3,
  maxCustPerHr: 6,
  cupsPerCust: 0,
  lbsPerCust: 6.7,
  hourlyCustomers: function(minCustPerHr, maxCustPerHr) {
    return Math.floor(Math.random() * this.maxCustPerHr - this.minCustPerHr + 1) + minCustPerHr;
  },
  totalCups: function(hourlyCustomers, cupsPerCust) {
    return this.hourlyCustomers * this.cupsPerCust;
  },
  totalLbsFromCups: function(totalCups) {
    return this.totalCups / 20;
  },
  totalTogoLbs: function(hourlyCustomers, lbsPerCust) {
    return this.hourlyCustomers * this.lbsPerCust;
  },
  totalLbs: function(totalLbsFromCups, totalTogoLbs) {
    this.totalLbsFromCups + this.totalTogoLbs;
  }
};

//need a method to calculate the number of customers per hour(hourlyCustomers)
function(minCustPerHr, maxCustPerHr) {
  return Math.floor(Math.random() * this.maxCustPerHr - this.minCustPerHr + 1) + minCustPerHr;
  console.log(hourlyCustomers);
};

//need a method to calculate # of cups (totalCups)
function(cupsPerCust, hourlyCustomers) {
  return this.hourlyCustomers * this.cupsPerCust;
};

//need a method to calculate total lbs from cups (totalLbsFromCups)
function(totalCups) {
  return this.totalCups / 20;
};

//need a method to calculate total # of lbs to-go (totalTogoLbs)
function(hourlyCustomers,lbsPerCust) {
  return this.hourlyCustomers * this.lbsPerCust;
};

//need a method to calculate total # of lbs (totalLbs)
function(totalLbsFromCups, totalTogoLbs) {
  totalLbsFromCups + totalTogoLbs;
};
