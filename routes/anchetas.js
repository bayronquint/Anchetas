const {Router} = require('express')
const router = Router()

const { getAnchetas, postAnchetas, deleteAnchetas, putAnchetas, patchAnchetas} = require('../controller/anchetas')
const {validateCreate} = require('../validators/anchetas')

router.get('/',getAnchetas)
router.post('/', validateCreate, postAnchetas)
router.delete('/', deleteAnchetas )
router.put('/', putAnchetas )
router.patch('/', patchAnchetas )


module.exports = router