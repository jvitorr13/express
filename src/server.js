import 'dotenv/config';
import express from 'express';
import routes from './src/routes';

const porta = process.env.PORTA_API;
const app = express();

app.use(express.json());


routes(app);

app.listen(porta, ()=> console.log(`servidor rodando no link http://localhost:${porta}`));

