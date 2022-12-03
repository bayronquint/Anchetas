const { check } = require('express-validator')
const { validationResult } = require('express-validator')

const validateResult = (req, res, next) => {
    try{
        validationResult(req).throw()
        return next()
    } catch (err){
        res.status(403)
        res.send({ errors: err.array() })
    }
}

const validateCreate = [
    check('nombre')
        .exists()
        .not()
        .isEmpty(),
    check('descripcion')
        .exists()
        .not()
        .isEmpty(),
    check('insumo')
        .exists()
        .not()
        .isEmpty(),
    check('precio')
        .exists()
        .isNumeric()
        .not()
        .isEmpty(),
    check('disponible')
        .exists()
        .not()
        .isEmpty(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateResult }
module.exports = { validateCreate }