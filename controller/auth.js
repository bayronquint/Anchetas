const {response} = require('express')
const { generarJWT } = require('../helpers/generarJWT')
const Ancheta = require('../models/anchetas')

const anchetica = async (req, res = response) => {
    const { nombre, insumo } = req.body

    try {
        const anchetas = await Ancheta.findOne({nombre})
        //Verificar Correo
        if(!anchetas){
            return res.json({
                msg: 'El nombre de la ancheta no existe'})
        }
        //Verificar Contraseña

        if(anchetas.insumo != insumo){
            return res.json ({
                msg: 'Este insumo no coincide'})
        }

        //Verificar Estado
        if (anchetas.disponible == false) {
            return res.status(400).json({
                msg: 'La ancheta se encuentra agotada'
            })
        }
        //Generar Token
        const token = await generarJWT(anchetas.id)
        return res.json({ 
            anchetas,
            token
        })

    }catch (error) {
        return res.json({
            msg: 'Error, Contactese con el Administrador'})
    }
}

module.exports= {
    anchetica
}

