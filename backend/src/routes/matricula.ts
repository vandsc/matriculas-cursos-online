import { Router } from 'express';
import type { Aluno } from '../models/Aluno.js';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const router = Router();
const DB_PATH = join(process.cwd(), 'database.json');

router.post('/', async (req, res) => {
  const { nome, email, curso }: Aluno = req.body;

  // Validação conforme o enunciado
  if (!nome || !email || !curso) {
    return res.status(400).json({ error: "Dados incompletos para matrícula." });
  }

  try {
    const dados = await readFile(DB_PATH, 'utf-8');
    const matriculas: Aluno[] = JSON.parse(dados);

    matriculas.push({ nome, email, curso });
    await writeFile(DB_PATH, JSON.stringify(matriculas, null, 2));

    return res.status(201).json({ message: "Matrícula realizada com sucesso!" });
  } catch (error) {
    return res.status(500).json({ error: "Erro no armazenamento." });
  }
});

export default router;