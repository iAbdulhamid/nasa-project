const { existsLaunchWithId,
        getAllLanches,
        addNewLaunch,
        abortLaunchById
} = require('../../models/launches.model');


function httpGetAllLaunches(req, res) {
    res.status(200).json(getAllLanches());
}

function httpPostLaunch(req, res) {
    const newLaunch = req.body;
    
    if (!newLaunch.mission || !newLaunch.rocket || !newLaunch.launchDate || !newLaunch.target)
        return res.status(400).json({
            error: 'Missing required launch property'
        });
    
    newLaunch.launchDate = new Date(newLaunch.launchDate)
    if (isNaN(newLaunch.launchDate))
        return res.status(400).json({
            error: 'Invalid launch date'
        });
    
    addNewLaunch(newLaunch);

    res.status(201).json(newLaunch);
}

function httpAbortLaunch(req, res) {
    const launchId = +req.params.id;
    if (!existsLaunchWithId(launchId)) {
        return res.status(404).json({
            error: 'Launch not found!',
        });
    }
    
    const abortedLaunch = abortLaunchById(launchId);
    res.status(200).json(abortedLaunch);
}

module.exports = {
    httpGetAllLaunches,
    httpPostLaunch,
    httpAbortLaunch
};