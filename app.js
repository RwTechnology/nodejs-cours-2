const express = require('express')
const mysql = require('mysql')
const myconnection = require('express-myconnection')
const connection = require('express-myconnection')
const app = express()
const port = 3000
const noteRoutes=require('./router/noteRoutes')
const optionBd = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'noteappdb',
    port: 3306
}

//definition du middleware pour la connexion a la base de données
app.use(myconnection(mysql, optionBd, 'pool'))

//extraction des données du formulaire
app.use(express.urlencoded({ extended: false }))

// definition du moteur d'affichage
app.set('view engine', 'ejs')
app.set('views', 'IHM')

//definition des routes notes
// app.use('/noteApp',noteRoutes)
app.use(noteRoutes)


app.get('/apropos', function (req, res) {
    res.status(200).render('apropos')
})


app.use(function (req, res) {
    res.status(404).render('404')
})

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})