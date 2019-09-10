'use strict';

const resolvers = [];

async function resolveAsync(subject, relationship) {
    if (resolvers.length == 0) {
        throw new Error('No resolvers. call core-semantics.registerResolver() first');
    } else {
        return resolvers[0].resolveAsync(subject, relationship);
    }
}

function register(resolver) {
	resolvers.push(resolver);
}

module.exports.register = register;
module.exports.resolveAsync = resolveAsync;