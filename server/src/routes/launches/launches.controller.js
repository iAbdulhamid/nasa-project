const { getAllLanches } = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {
    res.status(200).json(getAllLanches());
}



module.exports = {
    httpGetAllLaunches,
};