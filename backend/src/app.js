const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

/**
 * Tipos de Parametros
 * 
 * Query Params: Parâmetro nomeados eniados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetro utilizados para indentificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */



//app.listen(3333);