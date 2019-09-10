'use strict';

const resolutionHandler = require('./lib/resolutionHandler');

module.exports = {
    'semprop': {
        'tech': {
            'publicIpAddress': 'tech//public-ip-address'
        }
    },
    registerResolver: resolutionHandler.register,
    resolveAsync: resolutionHandler.resolveAsync
};
