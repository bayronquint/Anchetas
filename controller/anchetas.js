const { response } = require('express')
const { find } = require('../models/anchetas')
const anchetas = require('../models/anchetas')
const anch = require('../models/anchetas')


const getAnchetas = async (req, res = response) => {
    const ancheta = await anchetas.find()
    res.json({
        msg: 'GET API anchetas',
        ancheta
    })
}

const postAnchetas = async (req, res) => {
    //Desestructuracion
    const { nombre, descripcion, insumo, precio, disponible } = req.body

    //recibir parametros y desestructurarlos 
    // instanciar el objeto con los parametros y recibirlos
    const ancheta = new anch({ nombre, descripcion, insumo, precio, disponible })


    await ancheta.save()

    res.json({
        msg: 'POST API anchetas',
        ancheta
    })
}

const deleteAnchetas = async(req,res)=>{


    const  { nombre } = req.query
    const ancheta = await anch.findOneAndDelete({nombre : nombre})

    res.json({
        msg: 'Delete api anchetas',
        ancheta
    })

}

const putAnchetas = async (req,res) => {

const {nombre, descripcion, insumo, precio, disponible} = req.body
const modificar = await anch.findOneAndUpdate({nombre : nombre}, {nombre: nombrenew, descripcion:descripcion , insumo:insumo , precio : precio, peso : Peso , disponible : disponible})

res.json({
    msg:'Put api Anchetas',
    modificar
})

}


const patchAnchetas = async (req,res) =>{
const{nombre, precio} = req.body
const patch = await anch.findOneAndUpdate({nombre : nombre},{precio : precio})

res.json({
    msg:'PATCH API Anchetas',
    patch
})
}

module.exports = {
    getAnchetas,
    postAnchetas,
    deleteAnchetas,
    putAnchetas,
    patchAnchetas
}