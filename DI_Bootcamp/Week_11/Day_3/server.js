// const http = require('http');

// const server = http.createServer((request, response) => {
//     // console.log('I hear you! thanks for the request!');
//     // console.log('headers', request.headers);
//     console.log('method', request.method);
//     console.log('url', request.url);

//     // response.setHeader('Content-Type', 'text/html');
//     // response.end('<h1>Hellooooooo!</h1>');

//     const user = {
//         name: 'John',
//         hobby: 'Skating'
//     }
//     response.setHeader('Content-Type', 'application/json');
//     response.end(JSON.stringify(user));

// })

// server.listen(3000);

const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send("getting root");
})
app.get('/profile', (req, res) => {
    res.send("getting profile");
})
app.post('/profile', (req, res) => {
    console.log(req.body);
    // const user = {
    //     name: 'Sally',
    //     hobby: 'Soccer'
    // }
    // res.send(user);
    res.send('Success');
    // res.send('Helloooo!');
})

// app.use((req, res, next) => {
//     console.log('<h1>Hellooooooo!</h1>')
//     next();
// });


// app.get('/', (req, res) => {
//     res.send('testest');
// });

app.listen(3000);
