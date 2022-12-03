const {Schema, model} = require('mongoose')

const Anchetas = Schema({
    nombre:{
        type: String
    },
    descripcion:{
        type: String
    },
    insumo:{
        type: String
    },
    precio:{
        type: Number
    },
    disponible:{
        type: Boolean
    }
})

module.exports = model('anchetas',Anchetas)