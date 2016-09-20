var username = prompt('Oh hello! Who are you?');
var gender = prompt('Are you a man or a woman? Not that it really matters to me.');
var partner = 'life partner';
if (gender == 'man') {
  partner = 'husband';
}
else if (gender == 'woman') {
  partner = 'wife';
}

var marryMe = prompt('I know I just met you, but I love you '  + username + '. Will you marry me?');
console.log('The user\'s name is ' + username + ', and they said ' + marryMe + '.');

if (marryMe == 'yes') {
  alert('Get the car! We\'re going to Vegas. Everything is legal there.');
  var hasCar = prompt('Do you have a car?');
  if (hasCar == 'yes') {
    alert('Great! Have a nice trip ' + username + '. I\'ll be waiting.');
    var drive = prompt('How was the trip?');
    if (drive !== 'fantastic') {
      alert('Sorry I couldn\'t be with you, the reception was terrible. Well, shall we?');
    }
    else {
      alert('And that\'s exactly why I love you!');
    }
    alert('Here we are! The Lust Before Love Marriage Inc.');
    alert('Priest: Do you, index.html, take ' + username + ' as your ' + partner + '?');
    alert('I do.');
    var doYou = prompt('Do you, ' + username + ', take index.html as your, um, robot...partner?');
    if (doYou == 'I do.' || doYou == 'I do') {
      alert('\(cue music\)\n\nAnd we lived happily ever after...<3');
      document.write('I am alone no longer.');
    }
    else if (doYou == 'no' || doYou == 'I don\'t') {
      document.write('Then why did you come all the way to Las Vegas? GOOD BYE FOREVER </3');
    }
    else {
      alert('Nevermind I\'ve changed my mind.');
    }
  }
  else {
    alert('Welp, I guess I\'ll have to wait for the next visitor. Thanks for nothing.');
  }
} else {
  alert('I...I don\'t know what to say. Good bye ' + username + ', I won\'t forget you.')
}
