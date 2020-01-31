var firstName = "Nancy";
var lastName = "Young";
var age = 20;
const legalDrivingAge = 16;

if (age < legalDrivingAge) {
  while (age < legalDrivingAge) {
    console.log(legalDrivingAge - age);
    age++;
  }
} else {
    console.log(`${firstName} ${lastName} can drive and has been for ${age - legalDrivingAge} years`);
  }
