//importing accounts-model giving us access to the functions and db calls in the accounts-model
const Account = require("./accounts-model")
exports.checkAccountPayload = (req, res, next) => {
  console.log("check middleware")
  next()
}

exports.checkAccountNameUnique = (req, res, next) => {
  console.log("check middleware")
  next()
}

exports.checkAccountId = async (req, res, next) => {//checkAccountId checks the accounts db 
  try{
    const account = await Account.getById(req.params.id)
    if(!account){
      res.status(404).json({ message: "account not found" })
    }else{
      req.account = account
      next()
    }
  }catch(err){
    next(err)
  }
}

