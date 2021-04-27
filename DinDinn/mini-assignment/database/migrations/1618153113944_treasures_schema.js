'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TreasuresSchema extends Schema {
  up () {
    this.create('treasures', (table) => {
      table.increments()
      table.timestamps()
      table.string('name', 80).notNullable()
      table.string('latitude', 80).notNullable()
      table.string('longtitude', 80).notNullable()
    })
  }

  down () {
    this.drop('treasures')
  }
}

module.exports = TreasuresSchema
