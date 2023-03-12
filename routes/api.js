const router = require('express').Router();
// const path = require('path');
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils')

router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
});

router.post('/notes', (req, res) => {
    console.log(req.body);
    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuidv4()
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully!`);
    } else {
        res.errored('Error in addding note.')
    }
});

router.delete('/notes', (req, res) => {
    const noteID = req.params.note_id;
    readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
        const result = json.filter((note) => note.note_id !== noteID);
        writeToFile('./db/db.json', result);
        res.json(`Item ${noteID} has been deleted`)
    })
})


module.exports = router