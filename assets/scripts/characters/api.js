'use strict'

// All games action requests must include a valid HTTP header
// Authorization: Token token=<token> or they will be rejected
// with a status of 401 Unauthorized.

const config = require('../config.js')
const store = require('../store.js')

// Handle all character database access (AJAX):

// Create new character:
const createCharacter = (character) => {
  return $.ajax({
    url: config.apiUrl + '/characters',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: character
  }) // return
} // createCharacter

// Show all characters:
const showCharacters = () => {
  return $.ajax({
    url: config.apiUrl + '/characters',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  }) // return
} // showCharacters

// Get a single character
const getCharacter = (charId) => {
  return $.ajax({
    url: config.apiUrl + `/characters/${charId}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  }) // return
} // getCharacter

// Delete a character
const deleteCharacter = (charId) => {
  return $.ajax({
    url: config.apiUrl + `/characters/${charId}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  }) // return
} // deleteCharacter

// Save a character:
const saveCharacter = (charData, charId) => {
  return $.ajax({
    url: config.apiUrl + `/characters/${charId}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: charData
  }) // return
} // saveCharacter

module.exports = {
  createCharacter,
  showCharacters,
  getCharacter,
  deleteCharacter,
  saveCharacter
}
