const animaisController = require('../controllers/animaisController');

module.exports = function (app)
{
  function hello(req, res)
  {
    res.status(200).send("<html><head><title>API</title></head><body><h1>API</h1> <p> API de backend para a aplicação trabalho final da disciplina Desenvolvimento de Aplicações Distribuidas</p> <hr> <p>Autor: CarlosHSilvaVieira</p><a href='https://github.com/CarlosHSilvaVieira/backendOng'>GITHUB</a></body></html>");
  }

  app.route('/')
  .get(hello)
  .post(hello);

  app.route('/animais')
    .post(animaisController.cadastrarAnimal);
//  .get(animaisController.getAnimais)


/*  app.route('/animais/:idAnimal')
  .get(animaisController.getAnimalById)
  .put(animaisController.alterarAnimal)
  .delete(animaisController.deleteAnimal);

  app.route('/animais/getByNome/:nome')
  .get(animaisController.getAnimalByNome);

  app.route('/animais/historico/')
  .post(animaisController.cadastrarHistorico);

  app.route('/animais/historico/:idAnimal')
  .get(animaisController.getHistorico);

  app.route('/animais/doar')
  .post(animaisController.doarAnimal);

  app.route('/animais/informarlocalizacao')
  .post(animaisController.informarLocalizacao);

  app.route('/animais/localzar')
  .post(animaisController.localizar);*/
};
