//Hours as an array
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//Locations
var pikePlace = {
  minCustPerHr: 14,
  maxCustPerHr: 55,
  cupsPerCust: 1.2,
  lbsPerCust: 3.7,
  customerPerHrArray: [],
  numCupsSoldArray: [],
  cupsToLbsArray: [],
  toGoLbsArray: [],
  totalLbsSoldArray: [],

    custPerHr: function() {
      for (var i = 0; i < hours.length; i++) {
        this.customerPerHrArray.push(Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1) + this.minCustPerHr));
      }
     console.log(this.customerPerHrArray);
   },

    numCupsSold: function() {
      for (var i = 0; i < hours.length; i++) {
        this.numCupsSoldArray.push(this.customerPerHrArray[i] * this.cupsPerCust);
      }
      console.log(this.numCupsSoldArray);
    },

    cupsToLbs: function() {
      for (var i = 0; i < hours.length; i++) {
        this.cupsToLbsArray.push(this.numCupsSoldArray[i] / 20);
      }
      console.log(this.cupsToLbsArray);
    },

    toGoLbs: function() {
      for (var i = 0; i < hours.length; i++) {
        this.toGoLbsArray.push(this.lbsPerCust * this.customerPerHrArray[i]);
      }
      console.log(this.toGoLbsArray);
    },

    totalLbsSold: function() {
      for (var i = 0; i < hours.length; i++) {
        this.totalLbsSoldArray.push(this.cupsToLbsArray[i] + this.toGoLbsArray[i]);
      }
      console.log(this.totalLbsSoldArray);
    },

    // this calls the methods for this object and populates the arrays
    render: function() {
      this.custPerHr();
      this.numCupsSold();
      this.cupsToLbs();
      this.toGoLbs();
      this.totalLbsSold();


    }


};
//console.log(pikePlace.custPerHrArray); //This array will not have anything in it because we didn't call the custPerHr method to populate the array.
// pikePlace.custPerHr();
//console.log(pikePlace.custPerHrArray); //This array will have something in it because the custPerHr method was called and put elements in the array.




//   hourlyCustomers: function(minCustPerHr, maxCustPerHr) {
//     return Math.floor(Math.random() * this.maxCustPerHr - this.minCustPerHr + 1) + minCustPerHr;
//   },
//   totalCups: function(hourlyCustomers, cupsPerCust) {
//     return this.hourlyCustomers * this.cupsPerCust;
//   },
//   totalLbsFromCups: function(totalCups) {
//     return this.totalCups / 20;
//   },
//   totalTogoLbs: function(hourlyCustomers, lbsPerCust) {
//     return this.hourlyCustomers * this.lbsPerCust;
//   },
//   totalLbs: function(totalLbsFromCups, totalTogoLbs) {
//     this.totalLbsFromCups + this.totalTogoLbs;
//   }
// };

// var capitolHill = {
//   minCustPerHr: 32,
//   maxCustPerHr: 48,
//   cupsPerCust: 3.2,
//   lbsPerCust: 0.4,
//   custPerHrArray: [],
//   totalTogoLbsArray: [],
//   totalCups:[],
//   totalLbsFromCups: [],
//
//   hourlyCustomers: function(minCustPerHr, maxCustPerHr) {
//     for (i = 0; i < hours.length; i++)
//     return Math.floor(Math.random() * this.maxCustPerHr - this.minCustPerHr + 1) + minCustPerHr;
//   },
  // totalCups: function(hourlyCustomers, cupsPerCust) {
  //   return this.hourlyCustomers * this.cupsPerCust;
  // },
  // totalLbsFromCups: function(totalCups) {
  //   return this.totalCups / 20;
  // },
  // totalTogoLbs: function(hourlyCustomers, lbsPerCust) {
  //   return this.hourlyCustomers * this.lbsPerCust;
  // },
  // totalLbs: function(totalLbsFromCups, totalTogoLbs) {
  //   this.totalLbsFromCups + this.totalTogoLbs;
  // }
//   renderData: function() {
//     var customers = this.hourlyCustomers();
//     var totalTogoLbs = customers * this.lbsPerCust;
//     var totalCups = customers * this.cupsPerCust;
//     var totalLbsFromCups = totalCups / 20;
//   }
// };

// var seaPubLib = {
//   minCustPerHr: 49,
//   maxCustPerHr: 75,
//   cupsPerCust:  2.6,
//   lbsPerCust: 0.2,
//   hourlyCustomers: function(minCustPerHr, maxCustPerHr) {
//     return Math.floor(Math.random() * this.maxCustPerHr - this.minCustPerHr + 1) + minCustPerHr;
//   },
//   totalCups: function(hourlyCustomers, cupsPerCust) {
//     return this.hourlyCustomers * this.cupsPerCust;
//   },
//   totalLbsFromCups: function(totalCups) {
//     return this.totalCups / 20;
//   },
//   totalTogoLbs: function(hourlyCustomers, lbsPerCust) {
//     return this.hourlyCustomers * this.lbsPerCust;
//   },
//   totalLbs: function(totalLbsFromCups, totalTogoLbs) {
//     this.totalLbsFromCups + this.totalTogoLbs;
//   }
// };
//
// var sLakeUnion = {
//   minCustPerHr: 35,
//   maxCustPerHr: 88,
//   cupsPerCust: 1.3,
//   lbsPerCust: 3.7,
//   hourlyCustomers: function(minCustPerHr, maxCustPerHr) {
//     return Math.floor(Math.random() * this.maxCustPerHr - this.minCustPerHr + 1) + minCustPerHr;
//   },
//   totalCups: function(hourlyCustomers, cupsPerCust) {
//     return this.hourlyCustomers * this.cupsPerCust;
//   },
//   totalLbsFromCups: function(totalCups) {
//     return this.totalCups / 20;
//   },
//   totalTogoLbs: function(hourlyCustomers, lbsPerCust) {
//     return this.hourlyCustomers * this.lbsPerCust;
//   },
//   totalLbs: function(totalLbsFromCups, totalTogoLbs) {
//     this.totalLbsFromCups + this.totalTogoLbs;
//   }
// };
//
// var seaTacAirport = {
//   minCustPerHr: 68,
//   maxCustPerHr: 124,
//   cupsPerCust: 1.1,
//   lbsPerCust: 2.7,
//   hourlyCustomers: function(minCustPerHr, maxCustPerHr) {
//     return Math.floor(Math.random() * this.maxCustPerHr - this.minCustPerHr + 1) + minCustPerHr;
//   },
//   totalCups: function(hourlyCustomers, cupsPerCust) {
//     return this.hourlyCustomers * this.cupsPerCust;
//   },
//   totalLbsFromCups: function(totalCups) {
//     return this.totalCups / 20;
//   },
//   totalTogoLbs: function(hourlyCustomers, lbsPerCust) {
//     return this.hourlyCustomers * this.lbsPerCust;
//   },
//   totalLbs: function(totalLbsFromCups, totalTogoLbs) {
//     this.totalLbsFromCups + this.totalTogoLbs;
//   }
// };
//
// var websiteSales = {
//   minCustPerHr: 3,
//   maxCustPerHr: 6,
//   cupsPerCust: 0,
//   lbsPerCust: 6.7,
//   hourlyCustomers: function(minCustPerHr, maxCustPerHr) {
//     return Math.floor(Math.random() * this.maxCustPerHr - this.minCustPerHr + 1) + minCustPerHr;
//   },
//   totalCups: function(hourlyCustomers, cupsPerCust) {
//     return this.hourlyCustomers * this.cupsPerCust;
//   },
//   totalLbsFromCups: function(totalCups) {
//     return this.totalCups / 20;
//   },
//   totalTogoLbs: function(hourlyCustomers, lbsPerCust) {
//     return this.hourlyCustomers * this.lbsPerCust;
//   },
//   totalLbs: function(totalLbsFromCups, totalTogoLbs) {
//     this.totalLbsFromCups + this.totalTogoLbs;
//   }
// };

// //need a method to calculate the number of customers per hour(hourlyCustomers)
// function(minCustPerHr, maxCustPerHr) {
//   return Math.floor(Math.random() * this.maxCustPerHr - this.minCustPerHr + 1) + minCustPerHr;
//   console.log(hourlyCustomers);
// };
//
// //need a method to calculate # of cups (totalCups)
// function(cupsPerCust, hourlyCustomers) {
//   return this.hourlyCustomers * this.cupsPerCust;
// };
//
// //need a method to calculate total lbs from cups (totalLbsFromCups)
// function(totalCups) {
//   return this.totalCups / 20;
// };
//
// //need a method to calculate total # of lbs to-go (totalTogoLbs)
// function(hourlyCustomers,lbsPerCust) {
//   return this.hourlyCustomers * this.lbsPerCust;
// };
//
// //need a method to calculate total # of lbs (totalLbs)
// function(totalLbsFromCups, totalTogoLbs) {
//   totalLbsFromCups + totalTogoLbs;
// };

// hourlyCups: [],
// dailyCups: 0,
// hourlyBeansByLb: [],
// dailyBeansbyLb: 0,
// allDailyBeans: 0,
//
// }
