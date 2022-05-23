'use strict'

const { User } = require('../../models')
const Bcrypt = require('bcryptjs')
const { Op } = require('sequelize')

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
                }).then((userExists) => {
                    if(userExists){
                        console.log('aai thi baki che')
                    }
                })
            }
        })
    }
}