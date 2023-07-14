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
  "Embrace the love within yourself and watch it radiate into the world around you.",
  "You are deserving of your own love and care, just as much as anyone else.",
  "Celebrate the unique and beautiful individual that you are, and love yourself unconditionally.",
  "Cherish your own heart and soul, for you are worthy of your own love and affection.",
  "In the journey of self-discovery, learn to love every part of yourself, both light and dark.",
  "Your love for yourself is a powerful force that can heal, transform, and inspire.",
  "Nurture a deep and genuine love for yourself, and let it be the foundation of your happiness.",
  "Treasure the person you are becoming and shower yourself with love every step of the way.",
  "Your self-love is a beacon of light that attracts positivity, growth, and genuine connections.",
  "Embrace self-love as an act of courage, and watch it ignite a beautiful transformation within you.",
  "You deserve to be happy.",
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
