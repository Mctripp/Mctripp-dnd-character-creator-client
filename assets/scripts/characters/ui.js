'use strict'

const store = require('./../store.js')
const getFormFields = require('./../../../lib/get-form-fields.js')
const showCharactersTemplate = require('../templates/character-listing.handlebars')
const displayCharacterTemplate = require('../templates/character-display.handlebars')

// Clear a form by string:
const clearForm = (form) => {
  $("#" + form).children().val('')
} // clearForm

// Clear all header forms:
const clearAllForms = () => {
  clearForm("form-sign-in")
  clearForm("form-sign-up")
  clearForm("form-change-password")
} // clearAllForms

// Display a success message for creating character:
const displayCreateSuccessMsg = msg => {
$(".status").html('')
$(".status-create").html(msg)
$(".status-create").css("color", "#1f1f1f")
} // displayCreateSuccessMsg

// Display other character-related status msgs:
const displayOtherSuccessMsg = msg => {
$(".status").html('')
$(".status-show").html(msg)
$(".status-show").css("color", "#1f1f1f")
} // displayOtherSuccessMsg

// When showing chars is successful:
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
  } // if
  displayOtherSuccessMsg('Characters shown successfully.')
} // onShowCharactersSuccess

// When get char is success:
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
    } // if
  })
  displayOtherSuccessMsg('Got ' + responseData.character.name + '.')
} // onGetCharacterSuccess

// When create char is success:
const onCreateCharacterSuccess = responseData => {
displayCreateSuccessMsg("Character created successfully")
clearAllForms()
// Append character to list immediately
} // onCreateCharacterSuccess

// FAILURES -------------------------

// Create failure msg:
const displayCreateFailureMsg = msg => {
  $(".status").html('')
  $(".status-create").html(msg)
  $(".status-create").css("color", "#ff1f1f")
} // displaySuccessMsg

// Other failure msg:
const displayOtherFailureMsg = msg => {
  $(".status").html('')
  $(".status-show").html(msg)
  $(".status-show").css("color", "#ff1f1f")
} // displaySuccessMsg

module.exports = {
  onShowCharactersSuccess,
  onCreateCharacterSuccess,
  onGetCharacterSuccess
}
