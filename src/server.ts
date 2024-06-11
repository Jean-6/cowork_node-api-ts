import express, {Request,Response} from 'express';



// Create Express server
const app = express(); // Express instance
const port = 3000; // Port Number


// Express configuration



app.get('/', (req: Request, res: Response) => {
    res.send('Hello from Server : TypeScript + Node.js + Express !');
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});



// Export Express app
export default app;