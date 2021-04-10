const express = require(`express`);
const {celebrate, Segments, Joi} = require('celebrate');
const routes = express.Router();
const OngController = require(`./Controllers/OngController`);
const IncidentController = require(`./Controllers/IncidentController`);
const ProfileController = require(`./Controllers/ProfileController`);
const SessionController = require(`./Controllers/SessionController`);

/**routes.post(`/ongs`, (request, response ) =>{

    const params = request.query; // Recebe os parametros passados pela requisicao -> serve para o query params
    const id = request.params; // Recebe os parametros passados pela Route
    const body = request.body; // Recebe os parametros do body

    console.log(body);

    return response.json({
        evento: `Semana Omnistack 11.0`,
        aluno: `Dyogo Romagna`
    })

}); // acesso a rota raiz, passando uma funcao como segundo parametro */

routes.get(`/profile`, celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

routes.post(`/sessions`, SessionController.create);

routes.get('/ongs', OngController.index);
routes.post(`/ongs`, celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create); // acesso a rota raiz, passando uma funcao como segundo parametro

routes.get(`/incidents`, celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);
routes.post(`/incidents`, IncidentController.create);
routes.delete(`/incidents/:id`, celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}),IncidentController.delete);

module.exports = routes;