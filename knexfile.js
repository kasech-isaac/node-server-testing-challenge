module.exports = {
	development: {
	client: "sqlite3",
	useNullAsDefault: true,
	connection: {
		filename: "./data/country.db2",
	},
	migrations: {
		directory: "./data/migrations",
	},
	seeds: {
		directory: "./data/seeds",
	},
},
}