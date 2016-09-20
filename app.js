'use strict';

var name = prompt('What\'s your name?');

var correctOrNot = 'correct';
var answer1 = prompt('If I am a Leo, was I born in 1993?').toLowerCase();
if (answer1 == 'yes' || answer1 == 'y') {
  correctOrNot = 'incorrect';
}
alert(name + ', you are ' + correctOrNot + '!');

correctOrNot = 'incorrect';
var answer2 = prompt('Is my favorite Harry Potter creature the hippogriff?').toLowerCase();
if (answer2 == 'yes' || answer2 == 'y') {
  correctOrNot = 'correct';
}
alert(name + ', you are ' + correctOrNot + '!');

correctOrNot = 'incorrect';
var answer3 = prompt('Do I know to dance the Soulja BoY?').toLowerCase();
if (answer3 == 'yes' || answer3 == 'y') {
  correctOrNot = 'correct';
}
alert(name + ', you are ' + correctOrNot + '!');

correctOrNot = 'correct';
var answer4 = prompt('Are the inner depths of my soul pitched in total blackness?').toLowerCase();
if (answer4 == 'yes' || answer4 == 'y') {
  correctOrNot = 'incorrect';
}
alert(name + ', you are ' + correctOrNot + '!');

correctOrNot = 'incorrect';
var answer5 = prompt('Do I have any hope for the future of America?').toLowerCase();
if (answer5 == 'yes' || answer5 == 'y') {
  correctOrNot = 'correct';
}
alert(name + ', you are ' + correctOrNot + '!');
