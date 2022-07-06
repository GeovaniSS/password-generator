import generatePassword from './generators'

const displayPassword = document.querySelector('#password')
const generateIcon = document.querySelector('.generatePassIcon')
const generateBtn = document.querySelector('.generatePassBtn')
const copyToClipBoardIcon = document.querySelector('.copyToClipBoardIcon')
const maxCharacters = document.querySelector('#characters')
const upperCase = document.querySelector('#uppercase')
const lowerCase = document.querySelector('#lowercase')
const number = document.querySelector('#number')
const symbol = document.querySelector('#symbol')

const randomPassword = () => {
  const randomPassword = generatePassword(
    maxCharacters.value, 
    upperCase.checked,
    lowerCase.checked,
    number.checked, 
    symbol.checked
  )

  return randomPassword || 'Nada selecionado'
}

export default () => {
  generateIcon.addEventListener('click', () => displayPassword.value = randomPassword())
  generateBtn.addEventListener('click', () => displayPassword.value = randomPassword())
  copyToClipBoardIcon.addEventListener('click', () => {
    navigator.permissions.query({name: "clipboard-write"})
      .then(() => updateClipboard())
  })
}

const updateClipboard = () => {
  navigator.clipboard.writeText(displayPassword.value)
}
