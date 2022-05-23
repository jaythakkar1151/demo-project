'use strict'

module.exports = {
    RESPONSE_CODE: {
        SUCCESS: 200,
        SUCCESS_NEW_RESOURCE: 201,
        SUCCESS_WITHOUT_RESPONSE: 204,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        NOT_FOUND: 404,
        FORBIDDEN: 403,
        INTERNAL_SERVER: 500
    },
    NODE_ENVIRONMENT: {
        DEVELOPMENT: 'development',
        PRODUCTION: 'production',
        STAGING: 'staging',
    },
    PER_PAGE: 10,
    PAGE: 1,
    DEFAULT_PAGE: 1,
    SUCCESS: 1,
    SIGNUP: 3,
    FAIL: 0,
    USER_DELETED: 2,
    USER_ACTIVE: 1,
    USER_INACTIVE: 0,
    EMAIL_VERIFICATION: 2,
    ACTIVE_CATEGORY: 1,
    INACTIVE_CATEGORY: 2,
    ACTIVE_AVATAR: 1,
    INACTIVE_AVATAR: 2,
    ACCEPTED: 1,
    GENERAL_NOTIFICATION: 1,
    GAME_INVITATION: 2,
    IS_CORRECT: true,
    IS_INCORRECT: false,
    GAME_NOT_STARTED: 0,
    GAME_ONGOING: 1,
    GAME_COMPLETED: 2,
    WIN_PERCENTAGE: 55,
    WON: true,
    LOSS: false,
    END_GAME: 4,
    NOTIFICATION_READ: true,
    FULL_POINTS: 1,
    HALF_POINTS: 0.5,
    TOTAL_GAME_TYPES: 3
}