//Location as objects
var pikePlace = {
  minCustPerHr: 14,
  maxCustPerHr: 55,
  cupsPerCust: 1.2,
  lbsPerCust: 3.7
};

var capitolHill = {
  minCustPerHr: 32,
  maxCustPerHr: 48,
  cupsPerCust: 3.2,
  lbsPerCust: 0.4
};

var seaPubLib = {
  minCustPerHr: 49,
  maxCustPerHr: 75,
  cupsPerCust:  2.6,
  lbsPerCust: 0.2
};

var sLakeUnion = {
  minCustPerHr: 35,
  maxCustPerHr: 88,
  cupsPerCust: 1.3,
  lbsPerCust: 3.7
};

var seaTacAirport = {
  minCustPerHr: 68,
  maxCustPerHr: 124,
  cupsPerCust: 1.1,
  lbsPerCust: 2.7
};

var websiteSales = {
  minCustPerHr: 3,
  maxCustPerHr: 6,
  cupsPerCust: 0,
  lbsPerCust: 6.7
};

//need a method to calculate the number of customers per hour
var hourlyCustomers = function(minCustPerHr, maxCustPerHr) {
  return math.floor(math.random() * maxCustPerHr - minCustPerHr + 1) + minCustPerHr;
  console.log(hourlyCustomers);
}

hourlyCustomers(68, 124);
