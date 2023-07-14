var phrases = [
  "Believe in yourself and all that you are.",
  "You are capable of amazing things.",
  "The only limit is your imagination.",
  "Believe in the power of your dreams and watch them come true.",
  "You have the strength within you to overcome any challenge.",
  "Embrace the journey, for it is where you will find your true purpose.",
  "Every day is a new opportunity to create the life you envision.",
  "Your perseverance and determination will lead you to great success.",
  "Let your passion guide you on the path to fulfillment and happiness.",
  "You possess the ability to make a positive impact on the world around you.",
  "Challenges are stepping stones to growth and self-discovery.",
  "Your unique talents and abilities have the power to inspire others.",
  "In the face of adversity, remember that you are stronger than you think.",
  "You deserve boundless happiness that knows no limits.",
  "Embrace the joy that you truly deserve with open arms.",
  "Believe in your worthiness of unwavering happiness and let it fill your life.",
  "You are deserving of radiant happiness that shines from within.",
  "Celebrate the fact that you deserve an abundance of happiness and fulfillment.",
  "Embrace the happiness that is rightfully yours and let it guide your journey.",
  "Remember that you are deserving of happiness in every aspect of your life.",
  "You are worthy of happiness that transcends all boundaries and limitations.",
  "As you recognize your own worth, you unlock the door to lasting happiness.",
  "You are loved.",
  // Add more phrases
];

function getRandomPhrase() {
  var randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex];
}

window.onload = function () {
  var phraseElement = document.querySelector(".inspirationalPhrase");
  phraseElement.innerHTML = getRandomPhrase();
};
