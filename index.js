import app from './src/app.js';

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
