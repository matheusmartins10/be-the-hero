const express = require('express')
const OngController = require('./controllers/OngController')
const Incidents = require('./controllers/IncidentController')
const ProfileController  = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.get('/ongs',OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/incidents', Incidents.index)
routes.post('/incidents', Incidents.create)
routes.delete('/incidents/:id', Incidents.delete)

routes.get('/profile', ProfileController.index)

module.exports = routes