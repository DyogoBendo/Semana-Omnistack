const express = require(`express`);
const cors = require(`cors`);
const routes = require(`./routes`); //./ por ser um arquivo e nao um pacote
const app = express(); // instanciando a aplicacao
const {errors} = require('celebrate');  
app.use(cors(
    //{origin: `http://meuapp.com`;}
));
app.use(express.json()); // define que a aplicacao usara json
app.use(routes); // passa a usar as rotas definifas em routes
app.use(errors());
/**
 * Rota / Recurso
 */

 /**
  *     Metodos HTTP
  * A minha rota eh acessivel a partir de um metodo da aplicacao
  * 
  * GET - Buscar/listar uma informacao do backend - O get eh usado por exemplo quando acessamos a rota no navegador
  * POST - Criar uma informacao no backend 
  * PUT - Alterar uma informacao no backend
  * DELETE - Deletar uma informacao no backend
  */    

  /**
   * Tipos de parametros
   * 
   * Query Params- Parametros nomeados enviados apos o ?  (filtros, paginacao) podem ser emendados com &
   * Route Params - parametros utilizados para identificar recursos app.get(`/users/:id`, (request, response ) -> identifica um unico usuario
   */   

   /**
    * Tipos de banco de dados
    * 
    * SQL- MySql, SQLite, PostGreeSQL, Oracle, Microsoft SQL Server -> SQL linguagem que conversamos com o BD
    * NoSQL - MongDB, CouchDB, ou tambem chamada nao relacional
    */

    /**
     * Modelo de comunicacao
     * 
     * Driver: SELECT * FROM users // Linguagem SQL
     * Query Builder: table(`user`).select(`*`).where(...) -> Linguagem JS 
     */


//app.listen(3333); // acessar a aplicacao na porta 3333

module.exports = app;