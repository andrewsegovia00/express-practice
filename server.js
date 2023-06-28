const express = require(`express`)

const app = express();
const path = require(`path`);
const students = require(`./data/students-db`);

app.set(`view engine`, `ejs`);
app.set(`views`, path.join(__dirname, `views`));

app.get(`/`, function(req, res) {
    res.redirect(`/home`);
})

app.get(`/home`, function(req, res) {
    res.render(`home`, students);
})

app.listen(3000, function() {
})