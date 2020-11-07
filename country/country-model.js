const db = require("../data/config")

function findById(id) {
	return db("countrys").where({ id }).first()
}
async function create(data) {
	const [id] = await db("countrys").insert(data)
	return findById(id)
}

function remove(id) {
	return db("countrys").where({ id }).del()
}

module.exports = {
	findById,
	create,
	remove,
}
