function greeting() {
  const randomInt = Math.floor(Math.random() * 10);
  if (randomInt >= 7 ) {
    return "You are so good looking!"
  } else if (randomInt <= 3) {
    return "You're the smartest person alive!"
  } else {
    return "Everyone loves you."
  }
}
module.exports = greeting;