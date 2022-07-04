const symbols = ',.;:><?|~^@!#$%&*()-_+={}[]/"'

const randomNumber = (min, max) => Math.round(Math.random() * (max - min) + min)
const generateUpperCase = () => String.fromCharCode(randomNumber(65, 91))
const generateLowerCase = () =>  String.fromCharCode(randomNumber(97, 122))
const generateNumber = () => String.fromCharCode(randomNumber(48, 57))
const generateSymbol = () => symbols[randomNumber(0, symbols.length - 1)]

export default (max, upper, lower, number, symbol) => {
  let password = ''
  
  for(let i = 0; i < max; i++) {
    if(upper) password += generateUpperCase()
    if(lower) password += generateLowerCase()
    if(number) password += generateNumber()
    if(symbol) password += generateSymbol()
  }

  return password.slice(0, max)
}