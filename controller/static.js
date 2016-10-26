var router = require ('express').Router()
router.use(require ('express').static(__dirname + '/../assetsFile'))
router.get('/',function(req ,res , next)
{
    res.sendfile('index.html')
})
router.use(require ('express').static(__dirname + '/../templateFiles'))
module.exports = router