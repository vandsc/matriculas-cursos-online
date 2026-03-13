import { Router } from 'express';

const router = Router();

// Aqui é onde define as "opções" que o usuário verá
const cursos = [
  { id: 1, nome: "Vue.js Avançado" },
  { id: 2, nome: "Node.js com TypeScript" },
  { id: 3, nome: "UI/UX Design" },
  { id: 4, nome: "Banco de Dados SQL" }, // Nova opção
  { id: 5, nome: "Segurança da Informação" }, // Nova opção
  { id: 6, nome: "Desenvolvimento Mobile" }  // Nova opção
];

router.get('/', (req, res) => {
  res.json(cursos);
});

export default router;