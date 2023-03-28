'use strict'

const mongoose = require('mongoose')
const config = require('config')

async function initConn () {
  await mongoose.connect(config.get('db'), {
    maxPoolSize: 20,
    minPoolSize: 10
  })
}

initConn()

module.exports = {
  User: require('./user'),
  Mock: require('./mock'),
  Group: require('./group'),
  Project: require('./project'),
  UserGroup: require('./user_group'),
  UserProject: require('./user_project')
}
