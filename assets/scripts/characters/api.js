'use strict'

// All games action requests must include a valid HTTP header
// Authorization: Token token=<token> or they will be rejected
// with a status of 401 Unauthorized.

const config = require('../config.js')
const store = require('../store.js')

// Handle all user database access (AJAX):

// Sign-up new user:
const createCharacter = (character) => {
  return $.ajax({
    url: config.apiUrl + '/characters',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: character
  }) // return
} // signUp

const showCharacters = () => {
  return $.ajax({
    url: config.apiUrl + '/characters',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  }) // return
} // signUp

const getCharacter = (charId) => {
  return $.ajax({
    url: config.apiUrl + `/characters/${charId}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  }) // return
} // signUp

const deleteCharacter = (charId) => {
  return $.ajax({
    url: config.apiUrl + `/characters/${charId}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  }) // return
} // signUp

const saveCharacter = (charData) => {
  return $.ajax({
    url: config.apiUrl + `/characters/${charData.id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: charData
  }) // return
} // signUp

module.exports = {
  createCharacter,
  showCharacters,
  getCharacter,
  deleteCharacter,
  saveCharacter
}
