import express from 'express';
import cors from 'cors';
import cursosRoutes from './routes/cursos.js';
import matriculaRoutes from './routes/matricula.js';

const app = express();

app.use(cors());
app.use(express.json());

// Registro das rotas conforme o enunciado
app.use('/cursos', cursosRoutes);
app.use('/matricula', matriculaRoutes);

app.listen(3000, () => console.log('🚀 API ativa em http://localhost:3000'));