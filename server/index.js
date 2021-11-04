const express = require("express")
const mongoose = require("mongoose")
const config = require("config")

const app = express()
const PORT = config.get('serverPort') || 5000

async function start() {
    try {
        await mongoose.connect(config.get("dbUrl"), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start();

app.listen(PORT, () =>{
    console.log(`Server start: ${PORT}`)
})