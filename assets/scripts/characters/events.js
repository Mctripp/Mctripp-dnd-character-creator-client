'use strict'

const ui = require('./ui.js')
const api = require('./api.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

// Handle all clicks, form submissions, etc.:

// USERS -------------------

const onCreateCharacter = event => {
  event.preventDefault()
  const character = getFormFields(event.target)

  api.createCharacter(character)
  // If succeed:
    .then(ui.onCreateCharacterSuccess)
  // If fail:
    .catch(ui.onCreateCharacterFailure)
} // onSignUp

const onGetCharacter = event => {
  event.preventDefault()
  const charId = $(event.target).data('id')

  api.getCharacter(charId)
  // If succeed:
    .then(ui.onGetCharacterSuccess)
  // If fail:
    .catch(ui.onGetCharacterFailure)
} // onSignUp

const onShowCharacters = event => {
  event.preventDefault()

  api.showCharacters()
  // If succeed:
    .then(ui.onShowCharactersSuccess)
  // If fail:
    .catch(ui.onShowCharactersFailure)
} // onSignUp

const onDeleteCharacter= (event) => {
  event.preventDefault()
  api.deleteCharacter($(event.target).data('id'))
    .then(function(){
      onShowCharacters(event)
    })
    .catch(ui.failure)
}

const onPressDelete = event => {
  event.preventDefault()
  const pressedButton = event.target
  $(pressedButton).unbind()
  $(pressedButton).html("Confirm deletion")
  $(pressedButton).css("background-color", "#f1a713")
  $(pressedButton).on('click', onDeleteCharacter)
}

const addHandlers = () => {
  $('.content').on('click', '.btn-delete', onPressDelete)
  $('.content').on('click', '.btn-get', onGetCharacter)
}

module.exports = {
  onCreateCharacter,
  onGetCharacter,
  onShowCharacters,
  onDeleteCharacter,
  onPressDelete,
  addHandlers
}
