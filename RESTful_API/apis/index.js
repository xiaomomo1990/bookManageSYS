'use strict';

const route = require('express').Router();

const routes = ['./root.js'];

const routers = [];

routes.forEach(function(item) {
    routers.push(require(item)(route));
})

export {routers};

