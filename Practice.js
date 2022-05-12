// const mark_height = 1.69;
// const mark_weight = 78;
// const john_height = 1.88;
// const john_weight = 95;

// const BMImark = mark_weight / mark_height ** 2;
// const BMIjohn = john_weight / (john_height * john_height);
// console.log(BMImark, BMIjohn);

// const markHigher = BMImark > BMIjohn;
// console.log(markHigher);

///-------------  STRING TEMPLATE -----------///

// const firstName = 'jignesh';
// const lastName = 'chavda';
// const Temp1 = "My name is" + ' ' + firstName + ' ' + lastName;
// const Temp2 = `my name is ${firstName}, ${lastName}`;
// console.log(Temp1);
// console.log(Temp2);
// let a = 5;
// let b = 10;
// console.log(`Fifteen is ${a + b} and
// not ${2 * a + b}.`);


///-------------     if..Statement     -----------///

// const marks = 42;

// if (marks >= 35){
//     console.log('hurrryyy u are pass');
// }
// else{
//     const passing = 35 - marks;
//     console.log(`sorry u are fail by ${passing} in this subject`);
// }

// const birthYear = 2012;
// let century;

// if(birthYear <= 2000){
//    century = 20;
// }else{
//     century = 21;
// }
// console.log(century);

// let markBmi = 20.4;
// let johnBmi = 21.2;

// if(markBmi > johnBmi){
//     console.log(`Mark's BMI (${markBmi}) is higher then John's  BMI (${johnBmi}))`)
// }
// else{
//     console.log(`John's BMI (${johnBmi}) is higher then Mark's BMI (${markBmi}))`)

// }

///-------------   Truthly & Falsy Values  -----------///
// In JS 5 falsy values : 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('jigs'));
// console.log(Boolean({}));
// console.log(Boolean(null));

// Example 1 //
// let money = 100;
// if (money){
//     console.log('plz dont spent all.');
// }
// else{
//     console.log('plz get the job.');
// }

// // Example 2 //
// let height;
// if(height){
//     console.log('Height is DEFINED');
// }
// else{
//     console.log('Height is UNDEFINED');
// }

///-------------  Equality Operators -----------///

// This is Strict Equality example (Does not support TYPE COERCION) // 
// const age = 25;
// if(age === 25){
//     console.log('you are adult (strict equality)');
// }

// // This is Loose Equality example (Support TYPE COERCION) // 
// const year = '25';
// if(age == 25){
//     console.log('you are adult (loose Eqality)');
// }

///-------------  Boolean Logic -----------///
// AND(&&) : When Both value TRUE then answer is TRUE.
// OR(||)  : When One value True then answer is TRUE.
// NOT(!) : In NOT TRUE=FALSE And FALSE=TRUE

// const hasDrivingLicense = true; //A
// const hasGoodVision = false; //B

// console.log(hasDrivingLicense && hasGoodVision); //False
// console.log(hasDrivingLicense || hasGoodVision); //True
// console.log(!hasDrivingLicense); //False
// console.log(hasDrivingLicense && hasDrivingLicense);//True
// console.log(hasGoodVision || hasGoodVision); //False
// console.log(!hasGoodVision); //True

// Jigs avg score is 97.66
// Bhakti avg score is 96.33

// Example 1 //
// const JigsAvgScore = 97.66;
// const BhaktiAvgScore = 96.33;

// if(JigsAvgScore > BhaktiAvgScore){
//     console.log('Jigs is Winner...!');
// }
// else if (BhaktiAvgScore > JigsAvgScore){
//     console.log('Bhakti is winner.')
// }
// else if(JigsAvgScore === BhaktiAvgScore){
//     console.log('The Match is Draw');
// }

// Example 2 //

// const JigsAvgScore = 103.33;
// const BhaktiAvgScore = 109;

// if(JigsAvgScore > BhaktiAvgScore && JigsAvgScore >= 100){
//     console.log('Jigs is Winner...!');
// }
// else if (BhaktiAvgScore > JigsAvgScore && BhaktiAvgScore >= 100){
//     console.log('Bhakti is winner.')
// }
// else if(JigsAvgScore === BhaktiAvgScore){
//     console.log('The Match is Draw');
// }

// Example 3 //

// const JigsAvgScore = 103.33;
// const BhaktiAvgScore =103.33;

// if(JigsAvgScore > BhaktiAvgScore && JigsAvgScore >= 100){
//     console.log('Jigs is Winner...!');
// }
// else if (BhaktiAvgScore > JigsAvgScore && BhaktiAvgScore >= 100){
//     console.log('Bhakti is winner.')
// }
// else if(JigsAvgScore === BhaktiAvgScore){
//     console.log('The Match is Draw');
// }

///------------- Switch Statement -----------///

// const day = 'monday';
// switch (day){
//     case 'monday':
//         console.log('Plan for the cource');
//         break;
//     case 'tuesday':
//         console.log('Mapping the structure');
//         break;
//     case 'wednesday':
//         console.log('Write the document');
//         break;
//     case 'thursday':
//         console.log('draw the flowchart');
//         break;
//     case 'friday':
//         console.log('write code example');
//         break;    
//     case 'saturday':
//         console.log('Record the video');
//         break;    
//     case 'sunday':
//         console.log('Enjoy Weekend');
//         break;  
//     default:
//         console.log('Not a Valid day');   
// }

///------------- Conditional (Ternery) Operator -----------///

// const age = 23;

// const drink = age >= 18 ? 'wine' : 'water'; // Ternery Operator
// console.log(drink);

// let drink2;
// if(age >=18){
//     drink2 = 'wine';
// }                                          // if...else
// else{
//     drink2 = 'water'; 
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18? 'wine': 'water'}`); // Ternery Operator

// let height;
// console.log(`Height is ${height? 'define' : 'Undefined'}`);  // Ternery Operator

// const jigneshPR = 89;
// const BhaktiPR = 81;

///------------- Function -----------///

/// Example 1 ///

// function fruits(apples, oranges){
//     const juice = `juice with ${apples} apples.orange juice with ${oranges} oranges.`;
//     return juice;
// }
// const appleJuice = fruits(3, 0);
// console.log(appleJuice);

/// Example 2 ///

// function info(firstname, age){
//     const name = `my name is ${firstname} and i am ${age} year old`;
//     return name;
// }
// const intro = info('Jignesh',26);
//     console.log(intro);

/// Example of Functon Declaration ///

// function CalcAge(birthyear){
//     return 1995 - birthyear;
// }
// const age1 = CalcAge(1890);
// console.log(age1);

// /// Example of Functon Expression ///

// const CalcAge2 = function(birthyear){
//     return 2022 - birthyear;
// }
// const age2 = CalcAge2(1995);
// console.log(age2);

///------------- Arrow Function -----------///

// const CalcAge = birthyear => 2022 - birthyear;
// console.log(CalcAge(1995));

// Example 1 //

// const RetirementYear = (birthyear,firstname) => {
//     const age = 2022 - birthyear;
//     const Retirement = 60 - age;
//     return `${firstname} Retire in ${Retirement}.`
// }
// console.log(RetirementYear(1995,'jignesh'));

// Example 3 //
// const solveMe = (a,b) => {
//     return a + b ;
// }
// console.log(solveMe(1,2));