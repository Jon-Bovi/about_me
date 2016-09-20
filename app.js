'use strict';

var name = prompt('What\'s your name?');

// Question 1
var correctOrNot = 'correct';
var answer1 = prompt('If I am a Leo, was I born in 1993?').toLowerCase();
console.log('User answer1 is ' + answer1);
if (answer1 == 'yes' || answer1 == 'y') {
  correctOrNot = 'incorrect';
}
alert(name + ', you are ' + correctOrNot + '!');

// Question 2
correctOrNot = 'correct';
var answer2 = prompt('Is my favorite Harry Potter creature the hippogriff?').toLowerCase();
console.log('User answer2 is ' + answer2);
if (answer2 == 'yes' || answer2 == 'y') {
  correctOrNot = 'incorrect';
}
alert(name + ', you are ' + correctOrNot + '!');

// Question 3
correctOrNot = 'incorrect';
var answer3 = prompt('Do I know to dance the Soulja BoY?').toLowerCase();
console.log('User answer3 is ' + answer3);
if (answer3 == 'yes' || answer3 == 'y') {
  correctOrNot = 'correct';
}
alert(name + ', you are ' + correctOrNot + '!');

// Question 4
correctOrNot = 'correct';
var answer4 = prompt('Are the inner depths of my soul pitched in total blackness?').toLowerCase();
console.log('User answer4 is ' + answer4);
if (answer4 == 'yes' || answer4 == 'y') {
  correctOrNot = 'incorrect';
}
alert(name + ', you are ' + correctOrNot + '!');

// Question 5
correctOrNot = 'incorrect';
var answer5 = prompt('Do I have any hope for the future of America?').toLowerCase();
console.log('User answer5 is ' + answer5);
if (answer5 == 'yes' || answer5 == 'y') {
  correctOrNot = 'correct';
}
alert(name + ', you are ' + correctOrNot + '!');
