'use strict';

const { Service } = require('egg');

class CrudService extends Service {
  async init() {
    const { ctx } = this;
    return ctx.model.Crud.find();
  }
  async create(params) {
    const { ctx } = this;
    return ctx.model.Crud.create(params);
  }
  async remove(params) {
    const { ctx } = this;
    return ctx.model.Crud.remove(params);
  }
  async update(params) {
    const { ctx } = this;
    return ctx.model.Crud.update(
      { _id: params._id },
      { name: params.name, tel: params.tel }
    );
  }
}

module.exports = CrudService;
