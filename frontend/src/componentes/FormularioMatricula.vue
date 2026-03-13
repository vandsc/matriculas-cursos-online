<template>
  <div class="card">
    <h2 class="titulo">Matrícula de Aluno</h2>
    <p class="legenda">Preencha os campos abaixo para confirmar sua vaga.</p>

    <form @submit.prevent="enviar">
      <div class="campo">
        <label>Nome Completo</label>
        <input v-model="form.nome" :class="{ 'borda-erro': erros.nome }" placeholder="Ex: Vando Costa">
        <small v-if="erros.nome" class="txt-erro">{{ erros.nome }}</small>
      </div>

      <div class="campo">
        <label>E-mail</label>
        <input v-model="form.email" type="email" :class="{ 'borda-erro': erros.email }" placeholder="seu@email.com">
        <small v-if="erros.email" class="txt-erro">{{ erros.email }}</small>
      </div>

      <div class="campo">
        <label>Curso Desejado</label>
        <select v-model="form.curso" :class="{ 'borda-erro': erros.curso }">
          <option value="">Selecione um curso...</option>
          <option v-for="c in listaCursos" :key="c.id" :value="c.nome">{{ c.nome }}</option>
        </select>
        <small v-if="erros.curso" class="txt-erro">{{ erros.curso }}</small>
      </div>

      <button :disabled="carregando" class="btn-preto">
        {{ carregando ? 'Processando...' : 'Confirmar Matrícula' }}
      </button>

      <div v-if="feedback" :class="['feedback-box', feedbackTipo]">
        {{ feedback }}
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const form = ref({ nome: '', email: '', curso: '' });
const listaCursos = ref([]);
const erros = ref({});
const carregando = ref(false);
const feedback = ref('');
const feedbackTipo = ref('');

// Busca cursos ao carregar
const buscarCursos = async () => {
  try {
    const res = await fetch('http://localhost:3000/cursos');
    listaCursos.value = await res.json();
  } catch {
    feedback.value = "🔌 Servidor offline. Ligue o backend!";
    feedbackTipo.value = "erro";
  }
};

// Validação dos dados obrigatórios
const validar = () => {
  erros.value = {}; // Limpa erros anteriores
  
  if (!form.value.nome.trim()) erros.value.nome = "O nome é obrigatório.";
  if (!form.value.email.includes('@')) erros.value.email = "Insira um e-mail válido.";
  if (!form.value.curso) erros.value.curso = "Selecione um curso.";

  return Object.keys(erros.value).length === 0;
};

// Envio para a API
const enviar = async () => {
  feedback.value = ''; // Limpa feedbacks anteriores

  if (!validar()) {
    feedback.value = "⚠️ Por favor, corrija os campos indicados.";
    feedbackTipo.value = "erro";
    return;
  }

  carregando.value = true;

  try {
    const res = await fetch('http://localhost:3000/matricula', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    });

    if (res.status === 201) {
      feedback.value = "✅ Inscrição realizada com sucesso!";
      feedbackTipo.value = "sucesso";
      form.value = { nome: '', email: '', curso: '' }; // Limpa formulário
    } else {
      feedback.value = "❌ Erro ao processar matrícula.";
      feedbackTipo.value = "erro";
    }
  } catch {
    feedback.value = "❌ Falha na conexão com o servidor.";
    feedbackTipo.value = "erro";
  } finally {
    carregando.value = false;
  }
};

onMounted(buscarCursos);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

.card {
  background: rgba(255, 255, 255, 0.95);
  padding: 35px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  width: 380px;
}

.titulo {
  font-family: 'Playfair Display', serif;
  font-size: 26px;
  color: #1a1a1a;
  margin-bottom: 5px;
}

.legenda { font-size: 14px; color: #666; margin-bottom: 25px; }

.campo { margin-bottom: 18px; display: flex; flex-direction: column; text-align: left; }

label { font-size: 13px; font-weight: bold; margin-bottom: 6px; color: #444; }

input, select {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  transition: 0.3s;
}

/* Classes de Erro */
.borda-erro { border-color: #d93025; background-color: #fff8f7; }

.txt-erro {
  color: #d93025;
  font-size: 12px;
  font-weight: bold;
  margin-top: 5px;
}

/* Botão Customizado */
.btn-preto {
  width: 100%;
  padding: 15px;
  background-color: #000000;
  color: #ffffff;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 0.3s;
}

.btn-preto:hover { background-color: #333; transform: translateY(-2px); }
.btn-preto:disabled { background-color: #888; cursor: not-allowed; }

/* Box de Feedback */
.feedback-box {
  margin-top: 20px;
  padding: 12px;
  border-radius: 6px;
  font-weight: bold;
  text-align: center;
  font-size: 14px;
}

.sucesso {
  background-color: #e6ffed;
  color: #22863a;
  border: 1px solid #34d058;
}

.erro {
  background-color: #ffeef0;
  color: #d73a49;
  border: 1px solid #f97583;
}
</style>