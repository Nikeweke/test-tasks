'use strict'

const Database = use('Database')

class IndexController {
  async index({request, response}) {
    try {
      const supportedPrizeValue = [10, 20, 30]
      const distanceMax = 10

      const data = request.all()

      if (!data.distance || !Number.isInteger(data.distance)) {
        response.badRequest('"distance" is invalid')
      }

      if (data.distance > distanceMax) {
        response.badRequest('"distance" is bigger than 10 km')
      }

      if (!data.prize_value || !Number.isInteger(data.prize_value)) {
        response.badRequest('"prize_value" is invalid')
      }

      if (!supportedPrizeValue.includes(data.prize_value)) {
        response.badRequest(`"prize_value" is not within ${supportedPrizeValue.join(', ')} `)
      }

      const result = await Database
        .table('treasures')
        .where('longtitude', data.longtitude)
        .where('latitude', data.latitude)
        .innerJoin('money_values', function () {
          this
            .on('money_values.treasure_id', 'treasures.id')
        })
        .first()

      if (!result) {
        return { message: 'No treasure was found. Try new coordinates' }
      }

      return result

    } catch(err) {
      console.log(err)
      response.badRequest({ message: 'Something went wrong', descr: err.message })
    }
  }
}

module.exports = IndexController
