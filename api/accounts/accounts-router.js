const router = require('express').Router()
//importing accounts-model to access functions
const Accounts = require("./accounts-model")
//importing middleware
const { checkAccountPayload, checkAccountNameUnique, checkAccountId } = require("./accounts-middleware")

router.get('/', async(req, res, next) => {
  try{//data = account info in accounts table
    const data = await Accounts.getAll()
    res.json(data)
  } catch(err){
    next(err)
  }
})

router.get('/:id', checkAccountId, async(req, res) => {
  res.json(req.account)
})

router.post('/', checkAccountPayload, checkAccountNameUnique, 
async (req, res, next) => {
  try{
    const newAccount = await Accounts.create({ 
      name: req.body.name.trim(),
      budget: req.body.budget,
    })
    res.status(201).json(newAccount)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', checkAccountId, checkAccountPayload,
 async(req, res, next) => {
   const updated = await Accounts.updateById(req.params.id, req.body)
  try{
    res.json(updated)
  } catch (err) {
    next(err)
  }
});

router.delete('/:id', checkAccountId, async(req, res, next) => {
  try{
    await Accounts.deleteById(req.params.id)
    res.json(req.account)
  } catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
  })
})

module.exports = router;
