'use strict'

const store = require('./../store.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

// Not explaining these next few functions in depth, names
// explain them well enough

const resetPwForms = () => {

} //resetPwForms

const swapPage1To2 = () => {

} //swapPage1To2

const swapPage2To1 = () => {

} //swapPage1To2

const displaySuccessMsg = msg => {
$("#msgs").text(msg)
$("#msgs").css("color", "green")
} // displaySuccessMsg

// Handle all UI changes:

// USERS ============================
// SUCCESSES ------------------------

const onSignUpSuccess = responseData => {
displaySuccessMsg("Signed up successfully")
$("#msgs").text(responseData)
} // onSignUpSuccess

const onSignInSuccess = responseData => {
displaySuccessMsg("Signed in successfully")
store.user = responseData.user
} // onSignInSuccess

const onSignOutSuccess = responseData => {
displaySuccessMsg("Signed out successfully")
} // onSignOutSuccess

const onChangePasswordSuccess = responseData => {
displaySuccessMsg("Changed password successfully")
} // onChangePasswordSuccess

// FAILURES -------------------------

const displayFailureMsg = msg => {
  console.log("fail")
$("#msgs").text(msg)
$("#msgs").css("color", "red")
} // displayFailureMsg

const onSignUpFailure = responseData => {
displayFailureMsg('Sign up failure - ' +
  responseData.status + ': ' +
  responseData.statusText)
} // onSignUpFailure

const onSignInFailure = responseData => {
  displayFailureMsg('Sign in failure - ' +
    responseData.status + ': ' +
    responseData.statusText)
} // onSignInFailure

const onSignOutFailure = responseData => {
  displayFailureMsg('Sign out failure - ' +
    responseData.status + ': ' +
    responseData.statusText)
} // onSignOutFailure

const onChangePasswordFailure = responseData => {
  displayFailureMsg('Change password failure - ' +
    responseData.status + ': ' +
    responseData.statusText)
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
