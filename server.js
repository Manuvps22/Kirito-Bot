const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🤖 Kirito-Bot está activo y funcionando 🚀');
});

app.listen(PORT, () => {
  console.log(`Servidor web activo en http://localhost:${PORT}`);
});
