var phrases = [
  "Believe in yourself and all that you are.",
  "You are capable of amazing things.",
  "The only limit is your imagination.",
  // Add more phrases here
];

function getRandomPhrase() {
  var randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex];
}

window.onload = function () {
  var phraseElement = document.querySelector(".inspirationalPhrase");
  phraseElement.innerHTML = getRandomPhrase();
};
