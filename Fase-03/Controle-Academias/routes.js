const express = require('express')
const routes = express.Router()
const instructors = require('./instructors')

routes.get('/', function (req,res) {
    return res.redirect('/instructors')
})

routes.get('/instructors', instructors.index)

routes.get('/instructors/create', function (req,res) {
    return res.render('instructors/create')
})


//rota para receber o id e passar para o front-end os dados do instrutor
//export.show no instructors.js
routes.get('/instructors/:id', instructors.show)

//export.edit no instructors.js
routes.get('/instructors/:id/edit', instructors.edit)

//Utilizado para validação do formulário antes de criar o instructors.js
//routes.post('/intructors', function(req,res){
    //return res.send('RECEBIDO')
//})

//Receber os dados no back-end
//routes.post('/intructors', function(req,res){
    //return res.send(req.body)
//})
// O req.body deverá ser configurado no express para que possamos receber as informações:
// server.use(express.urlencoded({extended: true})) - no server.js

//Validação do req.body - arquivo instructors.js

routes.post('/instructors', instructors.post)

routes.put('/instructors', instructors.put)

routes.delete('/instructors', instructors.delete)

routes.get('/members', function (req,res) {
    return res.render('members')
})

module.exports = routes
