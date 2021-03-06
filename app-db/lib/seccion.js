'use strict'
module.exports = function setupSeccion (SeccionModel) {
  async function createOrUpdate (seccion) {
    const cond = {
      where: {
        id: seccion.id
      }
    }
    // console.log(seccion.id)
    const existingSeccion = await SeccionModel.findOne(cond)
    console.log(existingSeccion)
    if (existingSeccion) {
      const updated = await SeccionModel.update(seccion, cond)
      return updated ? SeccionModel.findOne(cond) : existingSeccion
    }

    const result = await SeccionModel.create(seccion)
    return result.toJSON()
  }

  async function findAll() {
    return SeccionModel.findAll()
  }

  return {
    createOrUpdate,
    findAll
  }
}
