import express, { Application } from "express";


import Server from "./src";


// Env
const PROTOCOL = process.env.PROTOCOL || 'http'
const DOMAIN = process.env.DOMAIN || 'localhost';
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000;


// Vars
const app: Application = express();
const server: Server = new Server(app, {
    PROTOCOL,
    DOMAIN,
    PORT
});


// Logic
app.listen(PORT, DOMAIN, function () {
    console.log(`Server is running on port ${PORT}.`);

}).on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
        console.log("Error: address already in use");
    } else {
        console.log(err);
    }
});