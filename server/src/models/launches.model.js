const launches = new Map();

let lastFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Kepler IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'kepler-442 b',
    customer: ['NASA', 'ZTM'],
    upcoming: true,
    success: true
};

launches.set(launch.flightNumber, launch);


function existsLaunchWithId(id) {
    return launches.has(id);
}

function getAllLanches() {
    return Array.from(launches.values());
}

function addNewLaunch(launch) {
    lastFlightNumber++;
    launches.set(
        lastFlightNumber, 
        Object.assign(launch,{
            flightNumber: lastFlightNumber,
            customer: ['NASA2', 'ZTM2'],
            upcoming: true,
            success: true
        })
    );
}

function abortLaunchById(id) {
    const aborted = launches.get(id);
    aborted.upcoming = false;
    aborted.success  = false;
    return aborted;
}


module.exports = {
    existsLaunchWithId,
    getAllLanches,
    addNewLaunch,
    abortLaunchById,
};