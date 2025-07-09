import express from 'express';

const app = express();
const PORT = 3000;

app.get('/greet', (req, res) => {
  res.send('merhaba !');
});

app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});
