'use strict'

const Bcrypt = require('bcryptjs')

module.exports = {
    generatePassword: (password) => {
        return new Promise((resolve, reject) =>
            Bcrypt.hash(password, 10, (err, hash) => {
                if (err) reject()
                resolve(hash)
            }),
        )
    },
    verifyPassword: (plain_password, hashed_password) => {
        return new Promise((resolve, reject) => {
            Bcrypt.compare(plain_password, hashed_password, (err, result) => {
                if (err) {
                    reject(false)
                } else if (!result) {
                    reject(false)
                } else {
                    resolve(true)
                }
            })
        })
    },
    toUpperCase: (str) => {
        if (str.length > 0) {
            const newStr = str
                .toLowerCase()
                .replace(/_([a-z])/, (m) => m.toUpperCase())
                .replace(/_/, '')
            return str.charAt(0).toUpperCase() + newStr.slice(1)
        }

        return ''
    },
    /**
     * @description This function use for create random digits
     * @param length
     * @returns {*}
     */

    makeRandomDigit: (length) => {
        let result = ''
        const characters = '0123456789'
        const charactersLength = characters.length
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }

        return result
    },
    /**
     * @description This function use for create validation unique key
     * @param apiTag
     * @param error
     * @returns {*}
     */
    validationMessageKey: (apiTag, error) => {
        let key = module.exports.toUpperCase(error.details[0].context.key)
        let type = error.details[0].type.split('.')
        type = module.exports.toUpperCase(type[1])
        key = apiTag + key + type
        return key
    },

    /**
     * @description This function use for calculate average of value
     * @param sumValue
     * @param numValue
     * @param decimal
     * @returns average
     */
    averageValue: (sumValue, numValue, decimal) => {
        const average = parseFloat((sumValue / numValue).toFixed(decimal))
        return average
    },

    /**
     * @description This function use for calculate percentages
     * @param value
     * @param totalValue
     * @returns percentage
     */
    percentageValue: (value, totalValue, decimal) => {
        const percentage = parseFloat(((value / (totalValue !== 0 ? totalValue : 1)) * 100).toFixed(decimal))
        return percentage
    }
}