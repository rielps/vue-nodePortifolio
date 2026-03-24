const express = require('express');
const cors = require('cors');


const app = express();

// 👇 ADICIONA ISSO AQUI
app.use(cors());
app.use(express.static('public'));

// rota de teste
app.get('/', (req, res) => {
  res.send('API rodando 🚀');
});

// dados
const projetos = [
  {
    id: 1,
    nome: "Siapem",
    imagem: "http://localhost:3000/images/siapem.png",
    link: "https://github.com/seu-projeto"
  },
  {
    id: 2,
    nome: "Ensino Médio Potiguar",
    imagem: "http://localhost:3000/images/potiguar.png",
    link: "https://github.com/seu-projeto2"
  }
];

// rota
app.get('/api/projetos', (req, res) => {
  res.json(projetos);
});

// servidor
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});