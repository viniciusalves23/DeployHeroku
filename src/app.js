const express = require('express');
const logger = require('./logger');
const app = express();

app.get('/', (req, res) => {
  logger.info({ message: "Acesso root", env: process.env.NODE_ENV });
  res.send('Implementação V3');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
});

// impede que a porta trave durante os testes
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => logger.info({ message: "App rodando", port: PORT }));
}

module.exports = app;