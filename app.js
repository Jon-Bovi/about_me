'use strict';

var username = prompt('What\'s your username?');
console.log(username);
var score = 0;
var questions = ['Do I prefer chicken breast to chicken thighs?', 'Is my favorite Harry Potter creature the hippogriff?', 'Do I know to dance the Soulja BoY?', 'Are the inner depths of my soul pitched in total blackness?', 'Do I have any hope for the future of America?'];
var no = ['no', 'n'];
var yes = ['yes', 'y'];
var answers = [no, no, yes, no, yes];

var userAnswer, correctOrNot;
for (var c = 0; c < 5; c++) {
  userAnswer = prompt(questions[c]).toLowerCase();
  if (userAnswer === answers[c][0] || userAnswer === answers[c][1]) {
    correctOrNot = 'correct';
    score++;
  }
  else {
    correctOrNot = 'incorrect';
  }
  alert(username + ', you are ' + correctOrNot + '!');
  console.log('#' + c + ': ' + username + ' answered ' + userAnswer + '. Correct answer is ' + answers[c] + '. Score is ' + score);
}

// // Default correctness sets to incorrect before each question
// // Question 1
// var correctOrNot = 'incorrect';
// var answer1 = prompt('Do I prefer chicken breast to chicken thighs?').toLowerCase();
// console.log('User answer1 is ' + answer1);
// if (answer1 === 'no' || answer1 === 'n') {
//   correctOrNot = 'correct';
//   score++;
// }
// alert(username + ', you are ' + correctOrNot + '!');
//
// // Question 2
// correctOrNot = 'incorrect';
// var answer2 = prompt('Is my favorite Harry Potter creature the hippogriff?').toLowerCase();
// console.log('User answer2 is ' + answer2);
// if (answer2 === 'no' || answer2 === 'n') {
//   correctOrNot = 'correct';
//   score++;
// }
// alert(username + ', you are ' + correctOrNot + '!');
//
// // Question 3
// correctOrNot = 'incorrect';
// var answer3 = prompt('Do I know to dance the Soulja BoY?').toLowerCase();
// console.log('User answer3 is ' + answer3);
// if (answer3 === 'yes' || answer3 === 'y') {
//   correctOrNot = 'correct';
//   score++;
// }
// alert(username + ', you are ' + correctOrNot + '!');
//
// // Question 4
// correctOrNot = 'incorrect';
// var answer4 = prompt('Are the inner depths of my soul pitched in total blackness?').toLowerCase();
// console.log('User answer4 is ' + answer4);
// if (answer4 === 'no' || answer4 === 'n') {
//   correctOrNot = 'correct';
//   score++;
// }
// alert(username + ', you are ' + correctOrNot + '!');
//
// // Question 5
// correctOrNot = 'incorrect';
// var answer5 = prompt('Do I have any hope for the future of America?').toLowerCase();
// console.log('User answer5 is ' + answer5);
// if (answer5 === 'yes' || answer5 === 'y') {
//   correctOrNot = 'correct';
//   score++;
// }
// alert(username + ', you are ' + correctOrNot + '!');

// Question 6
var gotIt = false;
var tries = 4;
var age = Math.round(Math.random() * 30 + 70);
while (tries > 0 && !gotIt) {
  tries--;
  var answer6 = parseInt(prompt('How old is my imaginary oldest grandmother?'));
  if (answer6 === age) {
    alert('That\'s right!');
    score++;
    gotIt = true;
  } else if (answer6 <= age) {
    alert('Too low! You have ' + tries + ' more guesses.');
  } else {
    alert('Too high! You have ' + tries + ' more guesses.');
  }
  if (!gotIt && Math.abs(answer6 - age) < 3) {
    alert('You\'re close!');
  }
  console.log('#6: Guess is ' + answer6 + '. Answer is ' + age + '. Tries left: ' + tries + '. Score is ' + score);
}
if (!gotIt) {
  alert('She is ' + age + ' years old.');
}

// Question 7
gotIt = false;
tries = 6;
var foodList = ['celery', 'olives', 'kale', 'arugula', 'brazil nuts', 'hazelnuts', 'blue cheese'];
var numFoods = foodList.length;
while (tries > 0 && !gotIt) {
  tries--;
  var answer7 = prompt('Name one of my top ' + foodList.length + ' least favorite foods. \(use the plural form when applicable\)').toLowerCase();
  for (var i = 0; i < numFoods; i++) {
    if (answer7 === foodList[i]) {
      alert('That is correct!');
      score++;
      gotIt = true;
    }
  }
  if (!gotIt && tries > 0) {
    alert('Try again. You have ' + tries + ' more guesses.');
  } else if (tries === 0) {
    alert('You have no more guesses.');
  }
  console.log('#7: Guess is ' + answer7 + '. gotIt? = ' + gotIt + '. Tries left: ' + tries + '. Score is ' + score);
}

var foodSentence = 'In no particular order, my least favorite foods are: ' + foodList[0];
for (var j = 1; j < numFoods - 1; j++) {
  foodSentence += (', ' + foodList[j]);
}
foodSentence += (', and ' + foodList[numFoods - 1] + '.');
alert(foodSentence);

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
