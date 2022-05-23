'use strict'

const Joi = require('joi')
const { validationErrorResponseData } = require('../services/Response')
const { validationMessageKey } = require('../services/Helpers')

module.exports = {
    signUpValidation: (req, res, callback) => {
        const schema = Joi.object({
            name: Joi.string().required(),
            mobile: Joi.string().required(),
            email: Joi.string().required(),
            password: Joi.string().required()
        })
        const { error } = schema.validate(req)
        if (error) {
            return validationErrorResponseData(
                res,
                res.__(validationMessageKey('signUpValidation', error))
            )
        }
        return callback(true)
    }
}