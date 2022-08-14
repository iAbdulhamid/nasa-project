const express = require('express');

const launchesRouter = express.Router();

const { httpGetAllLaunches,
        httpPostLaunch,
} = require('./launches.controller');

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpPostLaunch);

module.exports = launchesRouter;