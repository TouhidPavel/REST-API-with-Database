const express = require("express")
const cors = require("cors")
const productRoute = require("./routes/productRoute")
const { SERVER_PORT } = require("./app/config/config")
const connectDB = require("./app/config/db")

const app = express()

// Security Middlewares
app.use(cors())

// Body Parsing
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use("/api", productRoute)

// 404 Handler
app.use((req, res, next) => {
    res.status(404).send('Bad URL Request: Page Not Found')
})

// Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({ message: "Internal Server Error" })
})

// Start Server
const PORT = SERVER_PORT
app.listen(PORT, async () => {
    console.log(`Server Running at http://localhost:${PORT}`)
})