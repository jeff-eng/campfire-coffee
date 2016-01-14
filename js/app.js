//Hours as an array
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

//Pike Place Market object and its methods
var pikePlace = {
  name: 'Pike Place Market',
  minCustPerHr: 14,
  maxCustPerHr: 55,
  cupsPerCust: 1.2,
  lbsPerCust: 3.7,
  customerPerHrArray: [],
  numCupsSoldArray: [],
  cupsToLbsArray: [],
  toGoLbsArray: [],
  totalLbsSoldPerHrArray: [],
  totalDailyLbs: 0,

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

    totalLbsSoldPerHr: function() {
      for (var i = 0; i < hours.length; i++) {
        this.totalLbsSoldPerHrArray.push(this.cupsToLbsArray[i] + this.toGoLbsArray[i]);
      }
      console.log(this.totalLbsSoldPerHrArray);
    },

    totalDailyLbsMethod: function() {
      for (var i = 0; i < hours.length; i++) {
         this.totalDailyLbs += this.totalLbsSoldPerHrArray[i];
      }
      return this.totalDailyLbs;
    },

    // this calls the methods for this object and populates the arrays
    render: function() {
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
  };
 pikePlace.render(); //calls the render method for Pike Place Market and displays data on data.html page

//Capitol Hill Location Object and its methods
var capitolHill = {
  name: 'Capitol Hill',
  minCustPerHr: 32,
  maxCustPerHr: 48,
  cupsPerCust: 3.2,
  lbsPerCust: 0.4,
  customerPerHrArray: [],
  numCupsSoldArray: [],
  cupsToLbsArray: [],
  toGoLbsArray: [],
  totalLbsSoldPerHrArray: [],
  totalDailyLbs: 0,

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

  totalLbsSoldPerHr: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalLbsSoldPerHrArray.push(this.cupsToLbsArray[i] + this.toGoLbsArray[i]);
    }
    console.log(this.totalLbsSoldPerHrArray);
  },

  totalDailyLbsMethod: function() {
    for (var i = 0; i < hours.length; i++) {
       this.totalDailyLbs += this.totalLbsSoldPerHrArray[i];
    }
    return this.totalDailyLbs;
  },

  // this calls the methods for this object and populates the arrays
  render: function() {
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
};
capitolHill.render(); //calls the render method for Capitol Hill and displays data on data.html page

//Seattle Public Library Object and its methods
var seaPubLib = {
  name: 'Seattle Public Library',
  minCustPerHr: 49,
  maxCustPerHr: 75,
  cupsPerCust:  2.6,
  lbsPerCust: 0.2,
  customerPerHrArray: [],
  numCupsSoldArray: [],
  cupsToLbsArray: [],
  toGoLbsArray: [],
  totalLbsSoldPerHrArray: [],
  totalDailyLbs: 0,

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

  totalLbsSoldPerHr: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalLbsSoldPerHrArray.push(this.cupsToLbsArray[i] + this.toGoLbsArray[i]);
    }
    console.log(this.totalLbsSoldPerHrArray);
  },

  totalDailyLbsMethod: function() {
    for (var i = 0; i < hours.length; i++) {
       this.totalDailyLbs += this.totalLbsSoldPerHrArray[i];
    }
    return this.totalDailyLbs;
  },

  // this calls the methods for this object and populates the arrays
  render: function() {
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
};
seaPubLib.render(); //calls the render method for Seattle Public Library and displays data on data.html page

// South Lake Union object and its methods
var sLakeUnion = {
  name: 'South Lake Union',
  minCustPerHr: 35,
  maxCustPerHr: 88,
  cupsPerCust: 1.3,
  lbsPerCust: 3.7,
  customerPerHrArray: [],
  numCupsSoldArray: [],
  cupsToLbsArray: [],
  toGoLbsArray: [],
  totalLbsSoldPerHrArray: [],
  totalDailyLbs: 0,

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

  totalLbsSoldPerHr: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalLbsSoldPerHrArray.push(this.cupsToLbsArray[i] + this.toGoLbsArray[i]);
    }
    console.log(this.totalLbsSoldPerHrArray);
  },

  totalDailyLbsMethod: function() {
    for (var i = 0; i < hours.length; i++) {
       this.totalDailyLbs += this.totalLbsSoldPerHrArray[i];
    }
    return this.totalDailyLbs;
  },

  // this calls the methods for this object and populates the arrays
  render: function() {
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
};

sLakeUnion.render(); //calls the render method for Sea-Tac Airport and displays data on data.html page

//Sea-Tac Airport object and its methods
var seaTacAirport = {
  name: 'Sea-Tac Airport',
  minCustPerHr: 68,
  maxCustPerHr: 124,
  cupsPerCust: 1.1,
  lbsPerCust: 2.7,
  customerPerHrArray: [],
  numCupsSoldArray: [],
  cupsToLbsArray: [],
  toGoLbsArray: [],
  totalLbsSoldPerHrArray: [],
  totalDailyLbs: 0,

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

  totalLbsSoldPerHr: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalLbsSoldPerHrArray.push(this.cupsToLbsArray[i] + this.toGoLbsArray[i]);
    }
    console.log(this.totalLbsSoldPerHrArray);
  },

  totalDailyLbsMethod: function() {
    for (var i = 0; i < hours.length; i++) {
       this.totalDailyLbs += this.totalLbsSoldPerHrArray[i];
    }
    return this.totalDailyLbs;
  },

  // this calls the methods for this object and populates the arrays
  render: function() {
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
};

seaTacAirport.render(); //calls the render method for Sea-Tac Airport and displays data on data.html page

//Website Sales object and its methods
var websiteSales = {
  name: 'Website Sales',
  minCustPerHr: 3,
  maxCustPerHr: 6,
  cupsPerCust: 0,
  lbsPerCust: 6.7,
  customerPerHrArray: [],
  numCupsSoldArray: [],
  cupsToLbsArray: [],
  toGoLbsArray: [],
  totalLbsSoldPerHrArray: [],
  totalDailyLbs: 0,

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

  totalLbsSoldPerHr: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalLbsSoldPerHrArray.push(this.cupsToLbsArray[i] + this.toGoLbsArray[i]);
    }
    console.log(this.totalLbsSoldPerHrArray);
  },

  totalDailyLbsMethod: function() {
    for (var i = 0; i < hours.length; i++) {
       this.totalDailyLbs += this.totalLbsSoldPerHrArray[i];
    }
    return this.totalDailyLbs;
  },

  // this calls the methods for this object and populates the arrays
  render: function() {
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
};

websiteSales.render();

//compiling aggregate total daily pounds
var aggregateKioskSales = 0;

var kiosks = [pikePlace, capitolHill, seaPubLib, sLakeUnion, seaTacAirport, websiteSales];
for (var i = 0; i < kiosks.length; i++) {
  kiosks[i].render();
  aggregateKioskSales += kiosks[i].totalDailyLbs;
}
var h1El = document.createElement('h1');
h1El.textContent = 'Total daily pounds of coffee for all locations is: ' + aggregateKioskSales.toFixed(1) + ' lbs.';
document.body.appendChild(h1El);
