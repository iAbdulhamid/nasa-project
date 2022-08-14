const { getAllLanches,
        addNewLaunch
} = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {
    res.status(200).json(getAllLanches());
}

function httpPostLaunch(req, res) {
    const newLaunch = req.body;
    newLaunch.launchDate = new Date(newLaunch.launchDate)
    addNewLaunch(newLaunch);

    res.status(201).json(newLaunch);
}



module.exports = {
    httpGetAllLaunches,
    httpPostLaunch,
};