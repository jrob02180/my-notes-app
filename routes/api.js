// dependencies
const router = require('express').Router();
const path = require('path');
const { v4: uuid4 } = require('uuid');
const fs = require('fs');

// get notes
router.get('/notes', (req, res) => {
    fs.readFile(path.resolve(__dirname, '..', 'db/db.json'), 'utf8', (err, data) => {
        if (err) console.log(err);
        return res.json(JSON.parse(data));
});
});

// save new notes
router.post('/notes', (req, res) => {
if (req.body) {
    const { title, text} = req.body;
    const newNote = {
        title,
        text,
        noteId: uuid4(),
    };
    fs.readFile(path.resolve(__dirname, '..', 'db/db.json'), 'utf8', (err, data) => {
        console.log(data)
        let newData = JSON.parse(data)
        newData.push(newNote)

        let changedData = JSON.stringify(newData)

        fs.writeFile(path.resolve(__dirname, '..', 'db/db.json'), changedData, (err) => {
            console.log(err)
            return res.json();
        })      
    })
}
});

module.exports = router