import express from 'express';
import bodyParser from "body-parser";

//Express App
const app = express();

/*app.use(express.json);

app.use((re,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*'); // To access to API from anywhere origin
    res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content,Accept,Content-Type, Authorization'); // Add headers mentioned to request sent toward API
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, PATCH, OPTIONS'); // Allow to send request with this methods
    next();
});
app.use(bodyParser.json())
*/
// API
app.get ('/', (req, res) => {
    res.send('create user controller');
});

// Express configuration
app.use((req,res) => {
    console.log('Hello from Server : TypeScript + Node.js + Express !');
});

const port = process.env.PORT || 3000; // Port Number
app.listen(process.env.PORT || 3000, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});

// Export Express app
export default app;