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

const displayCreateSuccessMsg = msg => {
$(".status").html('')
$(".status-create").html(msg)
$(".status-create").css("color", "#1f1f1f")
} // displaySuccessMsg

const displayOtherSuccessMsg = msg => {
$(".status").html('')
$(".status-show").html(msg)
$(".status-show").css("color", "#1f1f1f")
} // displaySuccessMsg

// Handle all UI changes:

// USERS ============================
// SUCCESSES ------------------------

const onShowCharactersSuccess = responseData => {
  $('#form-char-create').removeClass('nvisible')
  console.log(responseData)
  const responseCharacters = responseData.characters
  const showCharactersHtml = showCharactersTemplate({ characters: responseCharacters })
  $('.content').empty()
  if(responseCharacters.length === 0) {
    displayFailureMsg("No characters found for user.")
  } else {
    $('.content').append(showCharactersHtml)
  }
  displayOtherSuccessMsg('Characters shown successfully.')
} // onSignUpSuccess

const onGetCharacterSuccess = responseData => {
  $('#form-char-create').addClass('nvisible')
  const responseCharacter = responseData.character
  const responseCharacterAlign = responseCharacter.alignment
  const displayCharacterHtml = displayCharacterTemplate({ character: responseCharacter })
  $('.content').empty()
  $('.content').append(displayCharacterHtml)
  $('.div-char').find('select').children().each( (index, element) => {
    if (element.value === responseCharacterAlign){
      element.selected = true
    }
  })
  displayOtherSuccessMsg('Got ' + responseData.character.name + '.')
}

const onCreateCharacterSuccess = responseData => {
displayCreateSuccessMsg("Character created successfully")
clearAllForms()
} // onSignInSuccess

// FAILURES -------------------------

const displayCreateFailureMsg = msg => {
  $(".status").html('')
  $(".status-create").html(msg)
  $(".status-create").css("color", "#ff1f1f")
} // displaySuccessMsg

const displayOtherFailureMsg = msg => {
  $(".status").html('')
  $(".status-show").html(msg)
  $(".status-show").css("color", "#ff1f1f")
} // displaySuccessMsg

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
