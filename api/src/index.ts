import express, { Application } from "express";
import cors, { CorsOptions } from "cors";

import Services from "./services";


export default class Server {
    constructor(app: Application, settings: { PROTOCOL: string, DOMAIN: string, PORT: number }) {
        this.config(app, settings);
        new Services(app);
    }

    private config(app: Application, settings: {PROTOCOL: string, DOMAIN: string, PORT: number}): void {
        const { PROTOCOL, DOMAIN, PORT } = settings;
        

        const corsOptions: CorsOptions = {
            origin: `${PROTOCOL}://${DOMAIN}:${PORT}`
        };

        app.use(cors(corsOptions));
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
    }
}