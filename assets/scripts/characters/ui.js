'use strict'

const store = require('./../store.js')
const getFormFields = require('./../../../lib/get-form-fields.js')
const showCharactersTemplate = require('../templates/character-listing.handlebars')
const displayCharacterTemplate = require('../templates/character-display.handlebars')

// Not explaining these next few functions in depth, names
// explain them well enough

const clearForm = (form) => {
  $("#" + form).children().val('')
} //resetPwForms

const clearAllForms = () => {
  clearForm("form-sign-in")
  clearForm("form-sign-up")
  clearForm("form-change-password")
}

const displaySuccessMsg = msg => {
$("#msgs").html(msg)
$("#msgs").css("color", "green")
} // displaySuccessMsg

// Handle all UI changes:

// USERS ============================
// SUCCESSES ------------------------

const onShowCharactersSuccess = responseData => {
console.log(responseData)
const responseCharacters = responseData.characters
const showCharactersHtml = showCharactersTemplate({ characters: responseCharacters })
$('.content').empty()
$('.content').append(showCharactersHtml)
//separate this data neatly, populate scrolling block to pick fro
} // onSignUpSuccess

const onGetCharacterSuccess = responseData => {
  const responseCharacter = responseData.character
  const displayCharacterHtml = displayCharacterTemplate({ character: responseCharacter })
  $('.content').empty()
  $('.content').append(displayCharacterHtml)
}

const onCreateCharacterSuccess = responseData => {
displaySuccessMsg("Character created successfully")
clearAllForms()
} // onSignInSuccess

// FAILURES -------------------------

const displayFailureMsg = msg => {
  console.log("fail")
$("#msgs").text(msg)
$("#msgs").css("color", "red")
} // displayFailureMsg

module.exports = {
  onShowCharactersSuccess,
  onCreateCharacterSuccess,
  onGetCharacterSuccess
}
