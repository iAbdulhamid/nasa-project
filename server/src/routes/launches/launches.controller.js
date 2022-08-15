const { getAllLanches,
        addNewLaunch
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



module.exports = {
    httpGetAllLaunches,
    httpPostLaunch,
};