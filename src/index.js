const express = require('express');
const cors = require('cors')
const { Container } = require('./container')
const { init } = require('./config/inti.js')
const { loadRoutes } = require('./routes/index.js')

const app = express();
app.use(express.json());
app.use(cors());

(() => {
    init();
    const container = new Container();
    loadRoutes(app, container);
    
    app.listen(3000, () => {
        console.log(`Server running at http://localhost:3000`);
    });
})()

