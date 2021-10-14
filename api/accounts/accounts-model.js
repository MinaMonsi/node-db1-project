//importing DB to make DB calls
const db = require("../../data/db-config")

const getAll = () => {
  //equivalent to select * from accounts
  return db("accounts")
}

const getById = id => {
  //select * from accounts where id=1
  return db("accounts").where("id", id).first()
}

const create = async account => {
  //inserts new account into accounts table
  const [id] = await db('accounts').insert(account)
  return getById(id)
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
