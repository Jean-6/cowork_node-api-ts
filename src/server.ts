import express, { Router , Request , Response } from 'express';

//Route connection
import computer from './routes/computer';
import center from './routes/center';
import printer from './routes/printer';
import auth from './routes/auth';
import user from './routes/user';

import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./swagger.json";

// Create Express server
const app = express(); // Express instance
const port = process.env.PORT || 3000; // Port Number


app.use(express.json);

//Computer
app.use('/computer',computer);
//Printer
app.use ('/printer',printer);
//Center
app.use('/center',center);
//Auth
app.use ('/auth',auth);
//User
app.use ('/user',user);








// Documentation
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));

// Express configuration

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from Server : TypeScript + Node.js + Express !');
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});

// Export Express app
export default app;