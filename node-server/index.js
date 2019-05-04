const express = require('express');
const app = express();
const storage = require('node-persist');
const bodyParser = require('body-parser');
const randomstring = require("randomstring");

//constants
const idLength = 5;

//initialize storage
storage.initSync();
//middleware for getting the entire request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//list of routes
app.get('/', (req, res) => {
    res.send('GET /mushrooms\nGET /mushrooms/:id\nPOST /mushrooms\nPUT /mushrooms/:id');
});

//get the list of mushrooms
app.get('/mushrooms', (req, res) => {
    const mushrooms = getMushrooms();

    res.send(mushrooms);
});

//get a single mushroom
app.get('/mushrooms/:id', (req, res) => {
    const mushroom = getMushroom(req.params.id);

    if (mushroom) {
        res.send(mushroom);
    } else {
        res.status = 404;
        res.send('Not Found');
    }
});

//save a mushroom
app.post('/mushrooms', (req, res) => {
    let mushroom = req.body;
    mushroom.id = randomstring.generate(idLength);
    mushroom = saveMushroom(mushroom.id, mushroom);

    res.send(mushroom);
});

//edit a mushroom
app.put('/mushrooms/:id', (req, res) => {
    const id = req.params.id;

    if (!getMushroom(id)) {
        res.status = 404;
        res.send('Not Found');
    }

    let mushroom = req.body;
    mushroom = saveMushroom(id, mushroom);

    res.send(mushroom);
});

//get all the mushrooms from storage
function getMushrooms() {
    return storage.values();
};

//get a single mushroom from storage
function getMushroom(id) {
    return storage.getItemSync(id);
};

//save or update a mushroom with the id
function saveMushroom(id, mushroom) {
    mushroom.id = id;
    storage.setItemSync(id, mushroom);
    return mushroom;
};

//start the app
app.listen(8000, () => {
    console.log('Example app listening on port 8000!');
});
