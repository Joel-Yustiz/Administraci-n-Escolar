import { normalize, schema } from 'normalizr'

//const media = new schema.Entity(key , Definicion de mi esquema, opciones/ por defecto agarra el id)
const media = new schema.Entity('media', {}, {
    idAttribute: 'id',
    processStrategy: (value, parent, key) => ({...value, category: parent.id})
})

const category = new schema.Entity('categories', {
    playlist: new schema.Array(media)
})

const categories = {categories: new schema.Array(category)}

// const normalizedData = normalize(api, categories)
const normalizedData = {}
export default normalizedData;