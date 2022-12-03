const {Router} = require ('express')
const {anchetica} = require ('../controller/auth')

const router = Router()

router.get('/anchetica', anchetica)
router.post('/anchetica', anchetica)

module.exports = router