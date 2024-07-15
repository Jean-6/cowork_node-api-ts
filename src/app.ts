import bodyParser from 'body-parser'; // To parse the bodies of all incoming requests
import express  from 'express';
import mongooseService from "./service/mongooseService";

// Create Express server
//const app = express();


class App {

    public app :express.Application;

    constructor(){
        this.app = express();
        this.config();
        mongooseService.connectWithRetry();
    }
    config(){
        //Create app/json parser
        this.app.use(express.json);

        this.app.use((re,res,next) => {
            res.setHeader('Access-Control-Allow-Origin','*'); // To access to API from anywhere origin
            res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content,Accept,Content-Type, Authorization'); // Add headers mentioned to request sent toward API
            res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, PATCH, OPTIONS'); // Allow to send request with this methods
            next();
        });
        this.app.use(bodyParser.json())
    }
}

export default new App().app;