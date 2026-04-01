const express = require('express');
const logger = require('./logger');
const app = express();

app.get('/', (req, res) => {
  logger.info({ message: "Acesso root", env: process.env.NODE_ENV });
  res.send('Simulação DevOps Alportech - V2 rodando via Pipeline!');
});

// Endpoint para SLI de Disponibilidade
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => logger.info({ message: "App rodando", port: PORT }));