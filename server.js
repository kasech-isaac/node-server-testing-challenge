const express = require("express")
const cors = require("cors")
const countryRouter = require("./country/country-router")

const server = express()

server.use(cors())
server.use(express.json())

server.use("/country", countryRouter)
server.get("/", (req, res) => {
	res.json({
		message: "Welcome",
	})
})

server.use((err, req, res, next) => {
	
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports=server