'use strict';

var username = prompt('What\'s your username?');
var score = 0;

// Default correctness sets to incorrect before each question
// Question 1
var correctOrNot = 'incorrect';
var answer1 = prompt('Do I prefer chicken breast to chicken thighs?').toLowerCase();
console.log('User answer1 is ' + answer1);
if (answer1 === 'no' || answer1 === 'n') {
  correctOrNot = 'correct';
  score++;
}
alert(username + ', you are ' + correctOrNot + '!');

// Question 2
correctOrNot = 'incorrect';
var answer2 = prompt('Is my favorite Harry Potter creature the hippogriff?').toLowerCase();
console.log('User answer2 is ' + answer2);
if (answer2 === 'no' || answer2 === 'n') {
  correctOrNot = 'correct';
  score++;
}
alert(username + ', you are ' + correctOrNot + '!');

// Question 3
correctOrNot = 'incorrect';
var answer3 = prompt('Do I know to dance the Soulja BoY?').toLowerCase();
console.log('User answer3 is ' + answer3);
if (answer3 === 'yes' || answer3 === 'y') {
  correctOrNot = 'correct';
  score++;
}
alert(username + ', you are ' + correctOrNot + '!');

// Question 4
correctOrNot = 'incorrect';
var answer4 = prompt('Are the inner depths of my soul pitched in total blackness?').toLowerCase();
console.log('User answer4 is ' + answer4);
if (answer4 === 'no' || answer4 === 'n') {
  correctOrNot = 'correct';
  score++;
}
alert(username + ', you are ' + correctOrNot + '!');

// Question 5
correctOrNot = 'incorrect';
var answer5 = prompt('Do I have any hope for the future of America?').toLowerCase();
console.log('User answer5 is ' + answer5);
if (answer5 === 'yes' || answer5 === 'y') {
  correctOrNot = 'correct';
  score++;
}
alert(username + ', you are ' + correctOrNot + '!');

// Question 6
var gotIt = false;
var tries = 4;
while (tries > 0 && !gotIt) {
  tries--;
  var answer6 = prompt('How old is my oldest grandmother?');
  if (answer6 === '97') {
    alert('That\'s right!');
    score++;
    gotIt = true;
  } else if (parseInt(answer6) <= 97) {
    alert('Too low! You have ' + tries + ' more guesses.');
  } else {
    alert('Too high! You have ' + tries + ' more guesses.');
  }
}

// Question 7
gotIt = false;
tries = 6;
var answers = ['water', 'arnold palmer', 'coffee', 'beer'];
var numAnswers = answers.length;
while (tries > 0 && !gotIt) {
  var answer7 = prompt('Name one of my top ' + answers.length + ' drinks \(alcoholic or not\)').toLowerCase();
  for (var i = 0; i < numAnswers; i++) {
    if (answer7 === answers[i]) {
      alert('That is correct!');
      score++;
      gotIt = true;
    }
  }
  if (!gotIt) {
    tries--;
    alert('Try again. You have ' + tries + ' more guesses.');
  }
}

var drinkList = 'In no particular order, my favorite drinks are: ' + answers[0];
for (var j = 1; j < numAnswers - 1; j++) {
  drinkList += (', ' + answers[j]);
}
drinkList += (', and ' + answers[numAnswers - 1] + '.');
alert(drinkList);

var message;
if (score === 7) {
  message = 'Holy cow ' + username + '! ';
} else if (score >= 5) {
  message = 'Well done ' + username + '. ';
} else if (score >= 3) {
  message = 'Not bad ' + username + '. ';
} else {
  message = 'Eh, better luck next time ' + username + '. ';
}
alert(message + 'You got ' + score + ' out of 7 questions right.');
