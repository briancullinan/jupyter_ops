var client = require('socket.io-client')('https://localhost:8000', {
    secure: true,
    rejectUnauthorized: false
});