exports.seed = async function(knex) {
	await knex("countrys").truncate()
	await knex("countrys").insert([
		{ name: "Ethiopia" },
		{ name: "Israel" },
		{ name: "Russia" },
	])
}
