'use strict';

var username = prompt('What\'s your username?');

// Default correctness sets to incorrect before each question
// Question 1
var correctOrNot = 'incorrect';
var answer1 = prompt('If I am a Leo, was I born in 1993?').toLowerCase();
console.log('User answer1 is ' + answer1);
if (answer1 === 'no' || answer1 === 'n') {
  correctOrNot = 'correct';
}
alert(username + ', you are ' + correctOrNot + '!');

// Question 2
correctOrNot = 'incorrect';
var answer2 = prompt('Is my favorite Harry Potter creature the hippogriff?').toLowerCase();
console.log('User answer2 is ' + answer2);
if (answer2 === 'no' || answer2 === 'n') {
  correctOrNot = 'correct';
}
alert(username + ', you are ' + correctOrNot + '!');

// Question 3
correctOrNot = 'incorrect';
var answer3 = prompt('Do I know to dance the Soulja BoY?').toLowerCase();
console.log('User answer3 is ' + answer3);
if (answer3 === 'yes' || answer3 === 'y') {
  correctOrNot = 'correct';
}
alert(username + ', you are ' + correctOrNot + '!');

// Question 4
correctOrNot = 'incorrect';
var answer4 = prompt('Are the inner depths of my soul pitched in total blackness?').toLowerCase();
console.log('User answer4 is ' + answer4);
if (answer4 === 'no' || answer4 === 'n') {
  correctOrNot = 'correct';
}
alert(username + ', you are ' + correctOrNot + '!');

// Question 5
correctOrNot = 'incorrect';
var answer5 = prompt('Do I have any hope for the future of America?').toLowerCase();
console.log('User answer5 is ' + answer5);
if (answer5 === 'yes' || answer5 === 'y') {
  correctOrNot = 'correct';
}
alert(username + ', you are ' + correctOrNot + '!');
