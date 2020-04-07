'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const userEvents = require('./users/events.js')
const charEvents = require('./characters/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#form-sign-in').on('submit', userEvents.onSignIn)
  $('#form-sign-up').on('submit', userEvents.onSignUp)
  $('#form-sign-out').on('submit', userEvents.onSignOut)
  $('#form-change-password').on('submit', userEvents.onChangePassword)
  $('#form-char-create').on('submit', charEvents.onCreateCharacter)
  $('#form-char-show').on('submit', charEvents.onShowCharacters)
  charEvents.addHandlers()
})
