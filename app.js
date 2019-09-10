'use strict';

const resolutionHandler = require('./lib/resolutionHandler');

function make(humaneUri) {
    return { id: humaneUri };
}

module.exports = {
    'rel': {
        'tech': {
            'publicIpAddress': make('tech//public-ip-address')
        }
    },
    registerResolver: resolutionHandler.register,
    resolveAsync: resolutionHandler.resolveAsync
};
