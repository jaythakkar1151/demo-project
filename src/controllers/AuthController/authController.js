'use strict'

const { User } = require('../../models')
const Bcrypt = require('bcryptjs')
const { Op } = require('sequelize')
const Response = require('../../services/Response')
const { FAIL, SUCCESS } = require('../../services/Constants')
const { signUpValidation } = require('../../services/AuthValidations')
const Helpers = require('../../services/Helpers')

module.exports = {

    /**
     * @description User signUp function
     * @param req
     * @param res
     */
    signUp: (req, res) => {
        const reqParam = req.body
        signUpValidation(reqParam, res, async (validate) => {
            if (validate) {
                User.findOne({
                    where: {
                        email: reqParam.email
                    }
                }).then(async (userExists) => {
                    if (userExists) {
                        return Response.successResponseWithoutData(
                            res,
                            res.locals.__('emailAlreadyExists'),
                            FAIL
                        )
                    } else {
                        const password = await Helpers.generatePassword(reqParam.password)
                        const signUpObj = {
                            name: reqParam.name,
                            mobile: reqParam.mobile,
                            email: reqParam.email,
                            password: password
                        }
                        User.create(signUpObj).then((newUser) => {
                            return Response.successResponseData(
                                res,
                                new Transformer.Single(newUser, userSignUpData).parse(),
                                SUCCESS,
                                res.locals.__('signupSuccess')
                            )
                        }).catch(() => {
                            return Response.errorResponseData(
                                res,
                                res.locals.__('internalError'),
                                RESPONSE_CODE.INTERNAL_SERVER
                            )
                        })
                    }
                })
            } else {
                return Response.errorResponseData(
                    res,
                    res.locals.__('internalError'),
                    RESPONSE_CODE.INTERNAL_SERVER
                )
            }
        })
    }
}