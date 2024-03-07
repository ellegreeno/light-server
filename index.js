const http = require('http');

const options = {
    hostname: 'webcode.me',
    port: 80,
    path: '/',
    method: 'GET'
};

const req = http.request(options, (res) => {

    console.log(`statusCode: ${res.statusCode}`);

    res.on('data', (d) => {

        process.stdout.write(d);
    });
});

req.on('error', (err) => {

    console.error(err);
});

req.end();
