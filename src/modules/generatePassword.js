const randomNumber = (min, max) => Math.round(Math.random() * (max - min) + min)

const generateRandomString = () => {
  const characters = [
   'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
   'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 
   'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ]

  const randomString = characters[randomNumber(0, characters.length - 1)]   
  return randomString;
}

const generateRandomSymbol = () => {
  const symbols = [
    '@', '!', '#', '$', '%', '&', '*', '!', '=', '_', '+', '-', '/', '.', '^'
  ]

  const randomSymbol = symbols[randomNumber(0, symbols.length - 1)]
  return randomSymbol
}

export default () => {
  let password = ''

  const characters = document.querySelector('#characters').value
  const upperCase = document.querySelector('#uppercase').checked
  const lowerCase = document.querySelector('#lowercase').checked
  const number = document.querySelector('#number').checked
  const symbol = document.querySelector('#symbol').checked

  for (let i = 0; i <= characters; i++) {
    let randNumber = randomNumber(0, 9)
    let randomUpperCase = generateRandomString().toUpperCase()
    let randomLowerCase = generateRandomString()
    let randomSymbol = generateRandomSymbol()

    password += randNumber + randomUpperCase + randomLowerCase + randomSymbol
  }

  return password
}