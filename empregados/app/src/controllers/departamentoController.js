const { Departamento, Empregado } = require('../models');

module.exports = {
  async index(req, res) {
    const itens = await Departamento.findAll({ order: [['cod_depto','ASC']] });
    res.render('departamentos/index', { itens });
  },
  newForm(req, res) { res.render('departamentos/new'); },
  async create(req, res) {
    await Departamento.create({ nome: req.body.nome });
    res.redirect('/departamentos');
  },
  async show(req, res) {
    const dep = await Departamento.findByPk(req.params.id, { include: { model: Empregado, as: 'empregados' }});
    if (!dep) return res.sendStatus(404);
    res.render('departamentos/show', { dep });
  },
  async editForm(req, res) {
    const dep = await Departamento.findByPk(req.params.id);
    if (!dep) return res.sendStatus(404);
    res.render('departamentos/edit', { dep });
  },
  async update(req, res) {
    await Departamento.update({ nome: req.body.nome }, { where: { cod_depto: req.params.id }});
    res.redirect('/departamentos');
  },
  async destroy(req, res) {
    await Departamento.destroy({ where: { cod_depto: req.params.id }});
    res.redirect('/departamentos');
  }
};