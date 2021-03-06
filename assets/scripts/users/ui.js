'use strict'

const store = require('./../store.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

// Not explaining these next few functions in depth, names
// explain them well enough

// Clear a form by string
const clearForm = (form) => {
  $('#' + form).children().val('')
} // clearForm

// Clear all header forms
const clearAllForms = () => {
  clearForm('form-sign-in')
  clearForm('form-sign-up')
  clearForm('form-change-password')
} // clearAllForms

// Display success msg
const displaySuccessMsg = msg => {
  $('#msgs').text(msg)
  $('#msgs').css('color', 'green')
} // displaySuccessMsg

// SUCCESSES ------------------------

const onSignUpSuccess = responseData => {
  displaySuccessMsg('Signed up successfully')
  $('#form-sign-up')[0].reset()
} // onSignUpSuccess

const onSignInSuccess = responseData => {
  displaySuccessMsg('Signed in successfully')
  store.user = responseData.user
  clearAllForms()
  $('.signed-in').removeClass('nvisible')
  $('.signed-out').addClass('nvisible')
} // onSignInSuccess

const onSignOutSuccess = responseData => {
  displaySuccessMsg('Signed out successfully')
  clearAllForms()
  $('.signed-in').addClass('nvisible')
  $('.signed-out').removeClass('nvisible')
  $('.content').empty()
} // onSignOutSuccess

const onChangePasswordSuccess = responseData => {
  displaySuccessMsg('Changed password successfully')
  clearAllForms()
} // onChangePasswordSuccess

// FAILURES -------------------------

const displayFailureMsg = msg => {
  $('#msgs').text(msg)
  $('#msgs').css('color', 'red')
} // displayFailureMsg

const onSignUpFailure = responseData => {
  displayFailureMsg('Sign up failure - ' +
  responseData.status + ': ' +
  responseData.statusText)
  clearAllForms()
} // onSignUpFailure

const onSignInFailure = responseData => {
  displayFailureMsg('Sign in failure - ' +
    responseData.status + ': ' +
    responseData.statusText)
  clearAllForms()
} // onSignInFailure

const onSignOutFailure = responseData => {
  displayFailureMsg('Sign out failure - ' +
    responseData.status + ': ' +
    responseData.statusText)
  clearAllForms()
} // onSignOutFailure

const onChangePasswordFailure = responseData => {
  displayFailureMsg('Change password failure - ' +
    responseData.status + ': ' +
    responseData.statusText)
  clearAllForms()
} // onChangePasswordFailure

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
