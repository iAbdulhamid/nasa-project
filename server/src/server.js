const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 8000;  // in pakage.json: "start": "set PORT=5000 && node src/server.js"

const server = http.createServer(app);






server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});