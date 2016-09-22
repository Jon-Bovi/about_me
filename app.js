'use strict';

var username = prompt('What\'s your username?');
console.log(username);
var score = 0;

function questionsa() {
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
    } else {
      correctOrNot = 'incorrect';
    }
    alert(username + ', you are ' + correctOrNot + '!');
    console.log('#' + c + ': ' + username + ' answered ' + userAnswer + '. Correct answer is ' + answers[c] + '. Score is ' + score);
  }
}

function questionb() {
  var triesLeft = 4;
  var age = Math.round(Math.random() * 30 + 70);
  var finalMessage = 'Nope. ';
  var howClose = '';
  while (triesLeft > 0 && answer6 !== age) {
    triesLeft--;
    var answer6 = parseInt(prompt('How old is my imaginary oldest grandmother?'));
    if (answer6 === age) {
      score++;
      finalMessage = 'Congratulations! ';
    } else {
      if (Math.abs(answer6 - age) < 3) {
        howClose = ' But you\'re close!';
      }
      if (answer6 <= age) {
        alert('Too low! You have ' + triesLeft + ' more guesses.' + howClose);
      } else {
        alert('Too high! You have ' + triesLeft + ' more guesses.' + howClose);
      }
    }
    console.log('#6: Guess is ' + answer6 + '. Answer is ' + age + '. Tries left: ' + triesLeft + '. Score is ' + score);
  }
  alert(finalMessage + 'Her age is ' + age);
}

function food() {
  var gotIt = false;
  var triesLeft = 6;
  var foodList = ['celery', 'olives', 'kale', 'arugula', 'brazil nuts', 'hazelnuts', 'blue cheese', 'kidney beans'];
  var numFoods = foodList.length;
  while (triesLeft > 0 && !gotIt) {
    triesLeft--;
    var answer7 = prompt('Name one of my top ' + foodList.length + ' least favorite foods. \(use the plural form when applicable\)').toLowerCase();
    for (var i = 0; i < numFoods; i++) {
      if (answer7 === foodList[i]) {
        alert('That is correct!');
        score++;
        gotIt = true;
      }
    }
    if (!gotIt && triesLeft > 0) {
      alert('Try again. You have ' + triesLeft + ' more guesses.');
    } else if (triesLeft === 0) {
      alert('You have no more guesses.');
    }
    console.log('#7: Guess is ' + answer7 + '. gotIt? = ' + gotIt + '. Tries left: ' + triesLeft + '. Score is ' + score);
  }

  var foodSentence = 'In no particular order, my least favorite foods are: ' + foodList[0];
  for (var j = 1; j < numFoods - 1; j++) {
    foodSentence += (', ' + foodList[j]);
  }
  foodSentence += (', and ' + foodList[numFoods - 1] + '.');
  alert(foodSentence);
}

function theEnd() {
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
}

function mothafucktion() {
  questionsa();
  questionb();
  food();
  theEnd();
}
mothafucktion();
