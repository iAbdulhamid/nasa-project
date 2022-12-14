const BASE_URL = 'http://localhost:8000';

async function httpGetPlanets() {
  const response = await fetch(`${BASE_URL}/planets`);
  return await response.json();
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
  const response = await fetch(`${BASE_URL}/launches`);
  const fetchedLaunched = await response.json();
  return fetchedLaunched.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
}

// Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {
  try {
    return await fetch(`${BASE_URL}/launches`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(launch)
    });
  } catch (err) {
    return {
      ok: false,
    };
  }  
}

// Delete launch with given ID.
async function httpAbortLaunch(id) {
  try {
    return await fetch(`${BASE_URL}/launches/${id}`, {
      method: "DELETE",
    });
  } catch (err) {
    return {
      ok: false,
    };
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};