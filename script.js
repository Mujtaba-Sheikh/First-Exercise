//  var A = 65;
// var Z = 90;
// var a = 97;
// var z = 122;

// var input = prompt("Enter a character:");
// if (!isNaN (input)){

//     console.log("It is a number");
// }else if (input >= "A" && input <= "Z"){

//     console.log("It is an uppercase letter");
// }else if (input >= "a" && input <= "z"){

//     console.log("It is a lowercasre letter");
// }else{
    
//     console.log("It is not a letter");
// }

// var number1 = parseInt(prompt("Enter a first number"));
// var number2 = parseInt(prompt("Enter a second number"));

// if (number1 > number2){
//     console.log("The first number is greater than the second number");
// }else if (number2 > number1){
//     console.log("The second number is greater than the first number");
// }else{
//     console.log("The two numbers are equal");
// }

// var takeNumber = parseInt(prompt("Enter a number"));
// if (takeNumber > 0){
//     console.log("The number is positive ")
// }else if (takeNumber < 0){
//     console.log("The number is negative");
// }else{
//     console.log("The number is zero");
// }

// var vowels = prompt("Enter a letter");
// if (vowels == "a" || vowels == "e" || vowels == "i" || vowels == "o" || vowels == "u"){
//     console.log("True");
// }else{
//     console.log("False");
// }


// var myPassword = "password123";
// var password = prompt("Enter your password");
// if (!password){
//     console.log("Please Enter your password");
// }else if (myPassword == password){
//     console.log("Correct password");
// }else{
//     console.log("Incorrect password");
// }

// var hour = 16;
// if (hour < 18){
//     console.log("Good day");
// }else{
//     console.log("Good evening");
// }


// var time = prompt("Enter time in 24 hours format");

// if (time >= 0 && time <= 12){
//     console.log("Good morning");
// } else if (time >= 12 && time <= 17){
//     console.log("Good afternoon")
// } else if (time >= 17 && time <= 21){
//     console.log("Good evening");
// } else if (time >= 21 && time <= 24){
//     console.log("Good night");
// } else{
//     console.log("Invalid time format")
// }


// var studentName = [];
// var studentName1 = [
//     student = {

//     }
// ];

// var fruits = ["Mango", "Banana", "Apple"];
// var counting = [1, 2, 3, 4, 5];
// var boleanArray = [true, false, true, flase];
// // var mixedArray = ["Mango", 1, true, flase];

// var qualification = ["SSC", "HCS", "BCS", "BS", "MS", "PhD"];
// console.log(qualification[3]);

// var Student = ["Michel", "John", "Doe"];
// var score = [320, 230, 480];
// var totalMarks = 500;

// for (var i = 0; i < Student.length; i++){
//     var percentage = (score [i] / totalMarks) * 100;
//     console.log("Score of " +  Student[i] +  " is"  + " .percentage: " +  percentage + "%");
// }

// var colour = ["Red", "Green", "Blue"];
// var usercolour = prompt("Enter a colour to add at the beginning of the array");
// console.log(colour.unshift(usercolour));
// document.write("Updated colour array:" + colour);

// var colors = ["Red", "Green", "Blue"];
// document.write("Original Array: " + colors );

// var newColor = prompt("Enter a color to add at the end:");
// colors.push(newColor);
// document.write("Updated Array: " + colors);


// var colors = ["Red", "Green", "Blue"];
// document.write("Original Array: " + colors );
// colors.unshift("Yellow", "Purple");
// document.write("Updated Array: " + colors);


// var colors = ["Yellow", "Purple", "Red", "Green", "Blue"];
// document.write("Original Array: " + colors);
// colors.shift();
// document.write("Updated Array: " + colors);


// var colors = ["Purple", "Red", "Green", "Blue"];
// document.write("Original Array: " + colors);
// colors.pop();
// document.write("Updated Array: " + colors);


// var colors = ["Red", "Green", "Blue"];
// document.write("Original Array: " + colors );

// var index = prompt("Enter the index to add color:");
// var colorName = prompt("Enter the color name:");
// colors.splice(index, 0, colorName);
// document.write("Updated Array: " + colors);


// var colors = ["Red", "Green", "Blue", "Yellow"];
// document.write("Original Array: " + colors );

// var index = prompt("Enter the index to delete color(s):");
// var count = prompt("How many colors do you want to delete?");

// colors.splice(index, count);

// document.write("Updated Array: " + colors);

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2, 4);
console.log(selectedCities);


var arr = ["This", "is", "my", "cat"];
var str = arr.join(" ");
console.log(str);


var fif = [];
fif.push("A");
fif.push("B");
fif.push("C");
console.log(fif);


console.log (fif.shift());
console.log(fif.shift());
console.log(fif.shift());


var multiArray = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
]
for (var i = 0; i < multiArray.length; i++) {
    var row = ""; 
    for (var j = 0; j < multiArray[i].length; j++) {
      row += multiArray[i][j] + " ";
    }
    console.log(row);
  }


for (var i = 1; i <= 10; i++){
    console.log(i)
}


var fruits = ["apple", "banana", "mango", "orange"];

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


for (var i = 1; i <= 15; i++) {
  document.write(i + ", ");
}
document.write("<br><br>");


for (var i = 10; i >= 1; i--) {
  document.write(i + ", ");
}
document.write("<br><br>");


for (var i = 0; i <= 20; i += 2) {
  document.write(i + ", ");
}
document.write("<br><br>");


for (var i = 1; i < 20; i += 2) {
  document.write(i + ", ");
}
document.write("<br><br>");


for (var i = 2; i <= 20; i += 2) {
  document.write(i + "k, ");
}


var A = [24, 53, 78, 91, 12];

var largest = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i]; 
    }
}

console.log("The largest number is " + largest);