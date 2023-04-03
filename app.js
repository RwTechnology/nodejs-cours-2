const express = require('express')
const app = express()
const port = 3000

// definition du moteur d'affichage
app.set('view engine', 'ejs')
app.set('views', 'IHM')

const notes = [{ titre: "Creation contenue", description: "Creation description" },
{ titre: "Creation contenue 2", description: "Creation description 2" },
]

app.get('/accueil', function (req, res) {
    res.status(200).render('index', { notes })
})

app.get('/', function (req, res) {
    res.status(300).render('index',{ notes })
})

app.get('/apropos', function (req, res) {
    res.status(200).render('apropos')
})
app.use(function (req, res) {
    res.status(404).render('404')
})


app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})