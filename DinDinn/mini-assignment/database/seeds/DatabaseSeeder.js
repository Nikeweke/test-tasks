'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')



const users = [ 
  { name: 'U1', age: 21, password: 'luckyshine001', email: 'u1@luckyshine.xyz'},
  { name: 'U2', age: 51, password: 'luckyshine002', email: 'u2@luckyshine.xyz'},
  { name: 'U3', age: 31, password: 'luckyshine003', email: 'u3@luckyshine.xyz'},
  { name: 'U4', age: 18, password: 'luckyshine004', email: 'u4@luckyshine.xyz'},
  { name: 'U5', age: 21, password: 'luckyshine005', email: 'u5@luckyshine.xyz'},
  { name: 'U6', age: 35, password: 'luckyshine006', email: 'u6@luckyshine.xyz'},
]
const treasures = [
  {
      "id": "100",
      "latitude": "1.33125924",
      "longtitude": "103.8980486",
      "name": "T1"
  },
  {
      "id": "101",
      "latitude": "1.32255754",
      "longtitude": "103.8943086",
      "name": "T2"
  },
  {
      "id": "102",
      "latitude": "1.3166356",
      "longtitude": "103.8891225",
      "name": "T3"
  },
  {
      "id": "103",
      "latitude": "1.31286055",
      "longtitude": "103.8545565",
      "name": "T4"
  },
  {
      "id": "104",
      "latitude": "1.34439896",
      "longtitude": "103.8765938",
      "name": "T5"
  },
  {
      "id": "105",
      "latitude": "1.33616189",
      "longtitude": "103.8770866",
      "name": "T6"
  },
  {
      "id": "106",
      "latitude": "1.32552844",
      "longtitude": "103.8691014",
      "name": "T7"
  },
  {
      "id": "107",
      "latitude": "1.32303589",
      "longtitude": "103.8774815",
      "name": "T8"
  },
  {
      "id": "108",
      "latitude": "1.33465304",
      "longtitude": "103.870449",
      "name": "T9"
  },
  {
      "id": "109",
      "latitude": "1.32606138",
      "longtitude": "103.8793007",
      "name": "T10"
  },
  {
      "id": "110",
      "latitude": "1.25886946",
      "longtitude": "103.898879",
      "name": "T11"
  },
  {
      "id": "111",
      "latitude": "1.26973345",
      "longtitude": "103.8810448",
      "name": "T12"
  },
  {
      "id": "112",
      "latitude": "1.32914713",
      "longtitude": "103.8334781",
      "name": "T13"
  },
  {
      "id": "113",
      "latitude": "1.32960595",
      "longtitude": "103.8807937",
      "name": "T14"
  },
  {
      "id": "114",
      "latitude": "1.33700251",
      "longtitude": "103.8492249",
      "name": "T15"
  },
  {
      "id": "115",
      "latitude": "1.27845714",
      "longtitude": "103.8571762",
      "name": "T16"
  },
  {
      "id": "116",
      "latitude": "1.36019784",
      "longtitude": "103.8563582",
      "name": "T17"
  },
  {
      "id": "117",
      "latitude": "1.31551921",
      "longtitude": "103.8632839",
      "name": "T18"
  }
]
const moneyValues = [
    {
      "treasure_id": "100", "amt": "15", 
    },
    {
        "treasure_id": "101", "amt": "10"
    },
    {
        "treasure_id": "102", "amt": "15"
    },
    {
        "treasure_id": "103", "amt": "15"
    },
    {
        "treasure_id": "104", "amt": "10"
    },
    {
        "treasure_id": "105", "amt": "15"
    },
    {
        "treasure_id": "106", "amt": "15"
    },
    {
        "treasure_id": "107", "amt": "10"
    },
    {
        "treasure_id": "108", "amt": "15"
    },
    {
        "treasure_id": "109", "amt": "15"
    },
    {
        "treasure_id": "110", "amt": "10"
    },
   
] 

class DatabaseSeeder {
  async run () {
    try {
      for (const item of users) {
        await Database.table('users').insert(item)
      }

      for (const item of treasures) {
        await Database.table('treasures').insert(item)
      }

      for (const item of moneyValues) {
        await Database.table('money_values').insert(item)
      }

    } catch(err) {
      console.log(err)
    }

  }
}

module.exports = DatabaseSeeder
