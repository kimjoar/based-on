(function(root, factory) {

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.basedOn = factory();
    }

}(this, function() {
    'use strict';

    var extend = function(obj, source) {
        var newObj = {};
        for (var prop in obj) newObj[prop] = obj[prop];
        for (var prop in source) newObj[prop] = source[prop];
        return newObj;
    }

    function basedOn(base) {
        var builder = function(specifics) {
            return extend(base, specifics);
        }

        builder.with = function(specifics) {
            return basedOn(extend(base, specifics));
        };

        return builder;
    }

    return basedOn;

}));
