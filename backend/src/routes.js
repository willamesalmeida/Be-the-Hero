const expres = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = expres.Router();

//Rotas para ongs
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create);
//Rotas para casos de ongs cadastradas
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/sessions', SessionController.create);
module.exports = routes;