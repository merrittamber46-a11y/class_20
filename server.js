process.loadEnvFile(__dirname + "/.env");

const express = require('express');
const mongoose = require('mongoose');

const server = express();
const PORT = 3100;
// Allows the server to parse JSON data in the request body
server.use(express.json());

server.post("/questions", (request, response) => {
    console.log(request.body.question);

 // Create a new question in the database   
    const Questions = mongoose.model("Questions", new mongoose.Schema({ text: String }));

    response.status(201).send(); // No content -> Often use for creation
});

server.listen(PORT, () => {
    console.log("Server is Ready!");
    console.log("My Mongo URI is", process.env.MONGO_URI);

    mongoose.connect(process.env.MONGO_URI, { 
        dbName: "class_20_questions" })
});

