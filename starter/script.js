"use strict";
/* This is a fnction declaration*/
// function mynae() {
//   console.log("my name is Princewill");
// }
//calling the function , invoking the function, running the function
// myname();
// myname();
// myname();

//Function declaration
// function fruitproccesor(apples, oranges) {
//   // console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }
// const juicedrink = fruitproccesor(5, 2);
// console.log(juicedrink);

// const applejuice = fruitproccesor(7, 0);
// console.log(applejuice);

// function giftsitems(watches, shoes) {
//   const gifts = `giving ${watches} pairs of watches and ${shoes} pairs of shoes`;
//   return gifts;
// }

// const specialgifts = giftsitems(40, 20);
// console.log(specialgifts);

// function myname(firstname, lastname) {
//   const fullname = `My name is  ${firstname} and ${lastname} is my Father’s name `;
//   return fullname;
// }

// const princename = myname("John", "Doe");
// console.log(princename);
/* This is a fnction declaration ends here*/

/* This is a fnction expression*/
// const princeName = function (firstname, lastname, dob) {
//   return `My name is ${firstname} and my father's name is ${lastname} and I'm ${dob} years old`;
// };
// const princeFullName = princeName("Prince", "Odiniya", 28);
// console.log(princeFullName);

// function calcAge1(birthday) {
//   return 2022 - birthday;
// }
// const age1 = calcAge1(2000);
// console.log(age1);

// const calcAge2 = function (birthday) {
//   return 2022 - birthday;
// };
// const age2 = calcAge2(2001);
// console.log(age2);

//FUNCTION EXPRESSION
// const namee = function (firstame, lastname) {
//   const name1 = `My name is ${firstame} and my family's name is ${lastname}`;
//   return name1;
// };
// const fullName = namee("Prince", "Odiniya");
// console.log(fullName);
// /* This is a fnction expression ends*/

/*Arrow function
const calcAge3 = (birthyear) => 2022 - birthyear;
const age = calcAge3(2002);
console.log(age);

const yearsUntillRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement}`;
};
console.log(yearsUntillRetirement(2000, "Jude"));
console.log(yearsUntillRetirement(2005, "Mark"));*/

//

// //function calling function
// function jewellery(chains) {
//   return chains * 4;
// }

// function blinks(wristWatch, neckLace) {
//   const wristJewel = jewellery(wristWatch);
//   const neckJewel = jewellery(neckLace);
//   return `I have ${wristJewel} Wristwatches and ${neckJewel} Necklace`;
// }
// console.log(blinks(2, 4));

// //

// //1
// const calcAvgerage = (a, b, c) => (a + b + c) / 3;

// console.log(calcAvgerage(3, 4, 5));

// let scoreDolphins = calcAvgerage(44, 23, 71);
// let scoreKoalas = calcAvgerage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins wins the trophy🏆 (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas wins (${avgKoalas}) vs (${avgDolphins})`);
//   } else {
//     console.log("no team wins...");
//   }
// };
// checkWinner(scoreDolphins, scoreKoalas);
// // checkWinner(644, 322);

// ///2
// scoreDolphins = calcAvgerage(85, 54, 41);
// scoreKoalas = calcAvgerage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);
///
//
//
//
/*
///////////INTRODUCTION TO ARRAYS: its a big container for holding data////////
const friend1 = "Michael";
const friend2 = "Jeremaih";
const friend3 = "Idris";

console.log(friend1, friend2, friend3);

const friends = ["micheal", "Jeremaih", "Idirs"];
console.log(friends);

const years = new Array(1991, 1992, 1993);
console.log(years);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); //to retrieve the num of array data
console.log(friends[friends.length - 1]); //to retrieve the last data in the array

friends[2] = "Matthew"; //this is used to change data in array manually
console.log(friends);

const fullName = "Prince Odiniya";
const prince = [fullName, "Student", 2022 - 1999, friends];
console.log(prince);
// console.log(prince[0]);
console.log(prince.length);
// console.log(prince[prince.length - 4]);

const calcAge = function (birthYear) {
  return 2027 - birthYear;
};
const yrs = [1999, 2000, 2001, 2002, 2017];
const age1 = calcAge(yrs[0]);
const age2 = calcAge(yrs[2]);
const age3 = calcAge(yrs[yrs.length - 1]);
const ages = [calcAge(yrs[0]), calcAge(yrs[2]), calcAge(yrs[yrs.length - 1])];
console.log(ages);


///BAsic array method
const newL = friends.push("Bob"); //to add element to the end of array
console.log(friends);
const uL = friends.unshift("Bash"); //to add element to the biginning of array
console.log(friends);
console.log(newL);
console.log(uL);

friends.pop(); // to remove element from the end of array
console.log(friends);
friends.shift(); // to remove element from the beginning of array
console.log(friends);
console.log(friends.indexOf("micheal")); //show the index position of the data array
console.log(friends.indexOf("Bob"));
console.log(friends.includes("micheal")); // the includes function ES6 method showing if true or false a data still exit
console.log(friends.includes("Bob"));

//we can use the includes method to pass a statement
if (friends.includes("Bash")) {
  console.log("Yes You have a friend call Michael");
} else if (friends.includes("Jeremaih")) {
  console.log("Jeremaih is also your friend");
} else {
  console.log("You have no friend as such ");
}

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips1 = calcTip(bills[0]);
const tips2 = calcTip(bills[1]);
const tips3 = calcTip(bills[bills.length - 1]);
console.log(tips1, tips2, tips3);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const billTip = [
  bills[0] + [tips[0]],
  bills[0] + [tips[1]],
  bills[0] + [tips[2]],
];
console.log(billTip);
*/

/* function recap
const itemsPost = function (bags, cups) {
  const myItems = `I have ${bags} Bags and ${cups} Cups all items in my room are ${
    bags + cups
  }`;
  return myItems;
};

const allItems = itemsPost(10, 27);
console.log(allItems);

const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(22, 44, 79);
const scoreKoalas = calcAverage(89, 44, 72);
console.log(scoreDolphins, scoreKoalas);

const avgScore = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins wins the trophy🏆`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas wins the trophy🏆`);
  } else {
    console.log(`No team wins the trophy🏆`);
  }
};
avgScore(scoreDolphins, scoreKoalas);

const jewellery = function (chains) {
  return chains * 4;
};

const myJewels = function (watches, bangles) {
  const jewel1 = jewellery(watches);
  const jewel2 = jewellery(bangles);
  return `I have ${jewel1} watches and ${jewel2} bangles`;
};

const jewellries = myJewels(4, 5);
console.log(jewellries);*/

///////////INTRODUCTION TO OBJECTS:  defines key value pairs////////

// const prince = {
//   firstName: "Prince",
//   lastName: "Odiniya",
//   age: 2027 - 2002,
//   job: "Student",
//   friends: ["Mark", "John", "Sarah"],
// };
// console.log(prince);

// //using the dot notation
// console.log(prince.age, prince.lastName, prince.friends[1]);
// console.log(prince["firstName"]);

// //experimenting the bracket notaion
// const namekey = "Name";
// // console.log(prince["first" + namekey]);
// // console.log(prince["last" + namekey]);

// const likeAbout = prompt(
//   "What do you like about about prince! choose between firstname, lastname, job, friend, age"
// );
// // console.log(prince[likeAbout]);

// // Add data to an object

// prince.location = "lagos";
// prince["twitter"] = "@brawny_official";
// console.log(prince);

// if (prince[likeAbout]) {
//   console.log(prince[likeAbout]);
// } else {
//   console.log(
//     "Wrong request ! choose another between firstname, lastname, job, friend, age"
//   );
// }

// console.log(
//   `${prince.firstName} has ${prince.friends.length} friends and his best friend is ${prince.friends[0]}`
// );
/*
//object methods
const prince = {
  firstName: "Prince",
  lastName: "Odiniya",
  birthYear: 1994,
  job: "Developer",
  friends: ["Mark", "John", "Sarah"],
  hasDrivingLicense: true,
  collegedegree: false,
  calcAge: function () {
    // this function(calcAge) is method in this object(this type of function is call a function expression because its produce a value)
    this.age = 2027 - this.birthYear; // this.age as created
    return this.age;
  },
  // calcAge: function (birthYear) {
  //   return 2027 - birthYear;
  // },
  // calcAge: function () {
  //   return 2027 - this.birthYear;//the 'this' key word point to the object variable.
  // },
  // calcAge: function () {
  //   this.age = 2027 - this.birthYear; // this.age as created
  //   return this.age;
  // }, //the calcAge function is a property of the prince object in this case
  // getSummary: function () {
  //   return `${(this, this.firstName)} is a ${this.calcAge()} -years old ${
  //     this.job
  //   } and he has ${this.hasDrivingLicense ? "a license" : "no license"}`;
  // },
  getSummary2: function () {
    return `${(this, this.firstName)} is a ${prince.calcAge()} -years old ${
      prince.job
    } and he has ${
      prince.hasDrivingLicense ? "a driver's license" : "has no driver license"
    }, ${
      prince.collegedegree
        ? "he also has a College Degree"
        : "but he has no College Degree"
    }`;
  },
};
// console.log(prince.princeStaus);
// console.log(prince.calcAge());//doing this, we does not keep the code dry and also instead we can create another property and store it in the property so that when we need it thereafter we can the call it directly(eg this.age)
// console.log(prince.calcAge());
// console.log(prince.calcAge());
// console.log(prince.calcAge());
// console.log(prince.age);// this is coming from(this.age property, 'this' keyword point to the object name(prince in this example))
// console.log(prince.age);
// console.log(prince.age);

console.log(prince.getSummary2());
const mark = {
  firstName: "Mark",
  lastName: "Miller",
  weight: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};
// console.log(mark.calcBMI());

const john = {
  firstName: "John",
  lastName: "Smith",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.weight / (this.height * this.height);
    return this.bmi;
  },
};
console.log(mark.calcBMI(), john.calcBMI());

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.firstName} ${
      mark.lastName
    }'s bmi (${mark.calcBMI()}) is higher than ${john.firstName} ${
      john.lastName
    }'s bmi (${john.calcBMI()})`
  );
} else {
  console.log(
    `${john.firstName} ${
      john.lastName
    }'s bmi (${john.calcBMI()}) is higher than ${mark.firstName} ${
      mark.lastName
    }'s bmi (${mark.calcBMI()})`
  );
}
 */

//
//
//
//
////////// Loop Basics////////
//loops allos us to automate a repetitive task that we have to perform many times.
// console.log("lifting weight repetition 1🏋️‍♂️");
// console.log("lifting weight repetition 2🏋️‍♂️");
// console.log("lifting weight repetition 3🏋️‍♂️");
// console.log("lifting weight repetition 4🏋️‍♂️");
// console.log("lifting weight repetition 5🏋️‍♂️");
// console.log("lifting weight repetition 6🏋️‍♂️");
// console.log("lifting weight repetition 7🏋️‍♂️");
// console.log("lifting weight repetition 8🏋️‍♂️");
// console.log("lifting weight repetition 9🏋️‍♂️");
// console.log("lifting weight repetition 10🏋️‍♂️");

//this example above break the dont repeat yourself principle therfore we use the for loop to handle this kind of repetitve task
//for loop keeps running while the condition is true.
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting weight repetition ${rep}🏋️‍♂️`);
// }
// const prince = [
//   "Prince",
//   "Odiniya",
//   2027 - 2002,
//   "Student",
//   ["Mark", "John", "Sarah"],
//   true,
//   "carpenter",
// ];
// const type = []; //this will be filled based on prince array types  above
// console.log(prince.length);
// for (let i = 0; i < 5; i++) {
//   console.log(prince[i]);
// }
//the traditional name for conter is (i)
//reading value from prince array
// for (let i = 0; i < prince.length; i++) {
//   console.log(prince[i], typeof prince[i]);

//   //filling type arrays
// //   // type[i] = typeof prince[i];
// //   type.push(typeof prince[i]);
// }
// console.log(type);

// const years = [1994, 1995, 1999, 2000, 2007];
// const age = [];
// for (let i = 0; i < years.length; i++) {
//   // age[i] = 2027 - years[i];
//   age.push(2027 - years[i]);
// }
// console.log(age);

//

//continue and break
//continue is to exit the current iteration of the loop and continue to the next one
//while break is use to completely terminate the whole loop
// console.log("-----only string------");
// for (let i = 0; i < prince.length; i++) {
//   if (typeof prince[i] !== "string") continue; // this will only retrieve  strings data type and skipped othe data types
//   console.log(prince[i], typeof prince[i]);
// }
// console.log("-----break with number------");
// for (let i = 0; i < prince.length; i++) {
//   if (typeof prince[i] === "number") break; // this will only retrieve  strings data type and skipped othe data types
//   console.log(prince[i], typeof prince[i]);
// }

// const year = [2000, 2001, 2002, 2005, 2009];
// const now = 2027;
// const yearOld = [];
// for (let i = 0; i < year.length; i++) {
//   // yearOld[i] = now - year[1];
//   yearOld.push(now - year[i]);
// }
// console.log(yearOld);
//
//
/*
const prince = [
  "Prince",
  "Odiniya",
  2027 - 2002,
  "Student",
  ["Mark", "John", "Sarah"],
  true,
];

//
//looping backwards///
for (let i = prince.length - 1; i >= 0; i--) {
  console.log(i, prince[i]);
}

//creating a loop inside of a loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------Startung Exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: lifting weight repetition ${rep}`);
  }
} */
////
//
// THE WHILE LOOP/////
//example 1.
// let rep = 1; /// while loop does not really need a counter all it need is a condition to stay true for it to keep running
// while (rep <= 10) {
//   console.log(`While: lifting weight repetition ${rep}`);
//   rep++;
// }
//
// //
// //example 2.
// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);
// while (dice !== 6) {
//   console.log(` You roll a ${dice}`);
// }
/* 
const year = [2000, 2001, 2002, 2005, 2009];
const now = 2027;
const yearOld = [];
for (let i = 0; i < year.length; i++) {
  // yearOld[i] = now - year[1];
  yearOld.push(now - year[i]);
}
console.log(yearOld);

//final assigment

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

const calcTip = function (bill) {
  return bills >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  total.push(tip + bills[i]);
}
console.log(bills, tips, total);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum=sum+arr[i] is same as sum+=arr
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(tips));
console.log(calcAverage(total));
*/
/* 
const year = [2000, 2001, 2002, 2005, 2009];
const now = 2027;
const yearOld = [];
for (let i = 0; i < year.length; i++) {
  // yearOld[i] = now - year[1];
  yearOld.push(now - year[i]);
}
console.log(yearOld);
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

const calcTip = function (bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  total.push(tip + bills[i]);
}
console.log(bills, tips, total);

const array2 = [24, 31, 89, 33, 22, 19, 21];
const allT = [];

for (let i = 0; i < array2.length; i++) {
  allT.push(array2[i] / 7);
}
console.log(allT);*/

/*PROBLEM solving tips:
//We work for a company buiding a smart home thermomether.
 our most recent task is this::
//1. giving an array of temperature of one day.
  calculate the temperature amplitude, 
  keep in mind that sometimes there might be a sensor error
//

//above is the problem that we have to solve
///Tip 1:: understanding the problem
     ---what is temp amplitude? Ans: difference between highes and lowst temp
     how to compute max and min temperatures?
     whats a sensor error? and what t do?
     
//Tip 2: breaking it into smaller problem
how to ignore errors
find max value in temp array
find min value in temp array
substract min from max value iand return it
*/
// const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// let tempAmplitude = [0];

// const calcTempAmplitude = function (temps) {};

const pcs = function (fruit) {
  return fruit * 4;
};

const test = function (mango, apple) {
  const magoes = pcs(mango);
  const apples = pcs(apple);
  const juice = `Juice with ${magoes} mangoes and ${apples} apples`;
  return juice;
};

console.log(test(20, 40));

const calcAverage = (a, b, c) => (a + b + c) / 3;

let dolphinsScore = calcAverage(44, 23, 71);
let KoalasScore = calcAverage(65, 54, 49);
console.log(dolphinsScore, KoalasScore);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(
      `Dolphins wins with avg score of ${avgDolphins} against Koalas ${avgKoalas}`
    );
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(
      `Koalas wins with avg score of ${avgKoalas} against Dolphins ${avgDolphins}`
    );
  } else {
    console.log(`No one wins the trophy 🏆`);
  }
};
checkWinner(dolphinsScore, KoalasScore);
dolphinsScore = calcAverage(85, 54, 51);
KoalasScore = calcAverage(23, 14, 49);
console.log(dolphinsScore, KoalasScore);
checkWinner(dolphinsScore, KoalasScore);

function test2(a, b, c) {
  return a * b + c;
}

const checkTest = test2(4, 2, 4);
console.log(checkTest);

const anonymous = function (a, b, c) {
  return a * b + c;
};
console.log(anonymous(4, 2, 4));
function myFunction(a, b) {
  return a * b;
}

console.log(myFunction(1, 2));

const x = function (a, b) {
  return a * b;
};

console.log(x(4, 4));
function myFunction(a, b) {
  return arguments.length;
}

const functionXpression = function (mangos, cashiew) {
  const stock = `We have our stock for ${mangos} tons of Mangos, and a stock for ${cashiew} bags of Cashies `;
  return stock;
};
const stockCheck = functionXpression(124, 200);
console.log(stockCheck);

function ageCalculation(currentYear, birthyear) {
  const ageDefine = `Kings is a young man of ${
    currentYear - birthyear
  } years old Banker!`;
  return ageDefine;
}
const checkAge = ageCalculation(2023, 1997);
console.log(checkAge);

const ageCalculation2 = function (currentYear, birthyear) {
  const ageDefines = `JohnFrank is a young man of ${
    currentYear - birthyear
  } years old Footballer!`;
  return ageDefines;
};
const checkAge2 = ageCalculation2(2023, 1991);
console.log(checkAge2);

const calcAge = (birthYear) => 2022 - birthYear;
const age3 = calcAge(1995);
console.log(age3);

const yearsUntillRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 54 - age;
  return `${firstName} retires in ${retirement} years time`;
};

console.log(yearsUntillRetirement(1992, "Prince"));
console.log(yearsUntillRetirement(1989, "Boston"));
console.log(yearsUntillRetirement(1994, "Lawal"));

function jewellery(chains) {
  return chains * 4;
}

function blinks(wristWatch, neckLace) {
  const wristJewel = jewellery(wristWatch);
  const neckJewel = jewellery(neckLace);
  return `I have ${wristJewel} Wristwatches and ${neckJewel} Necklace`;
}

blinks(2, 3);

// const calcAveragei = (a, b, c) => (a, b, c) / 3;

// let scoreDolphins = calcAveragei(44, 23, 1);
// let scoreKoalas = calcAveragei(85, 54, 41);

// const checkWinner1 = function (avgDolphinss, avgKoalass) {
//   if (avgDolphinss > avgKoalass * 2) {
//     console.log(`Team Dolphins wins with ${avgDolphinss} points`);
//   } else if (avgKoalass > avgDolphinss * 2) {
//     console.log(`Team Koalas wins with ${avgKoalass} points`);
//   } else {
//     console.log(`No team wins`);
//   }
// };
// checkWinner1(scoreDolphins, scoreKoalas);
