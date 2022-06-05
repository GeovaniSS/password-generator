import './assets/css/style.css';

import generatePassword from './modules/generatePassword'

const displayPassword = document.querySelector('#password')
const generateIcon = document.querySelector('.generatePassIcon')
const generateBtn = document.querySelector('.generatePassBtn')


generateBtn.addEventListener('click', () => generatePassword())
generateIcon.addEventListener('click', () => generatePassword())