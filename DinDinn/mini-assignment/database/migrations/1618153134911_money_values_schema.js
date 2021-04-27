'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MoneyValuesSchema extends Schema {
  up () {
    this.create('money_values', (table) => {
      table.increments()
      table.timestamps()
      table.integer('treasure_id').notNullable()
      table.integer('amt').notNullable()
    })
  }

  down () {
    this.drop('money_values')
  }
}

module.exports = MoneyValuesSchema
