const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT;

// Позволяет парсить тело запроса в формате JSON
app.use(bodyParser.json());

// Массив для хранения полученных данных (замените на базу данных в реальном приложении)
let receivedData = [];

app.get('/', (req, res) => {
  const domain = req.get('host');
  res.send(`${domain}/receiveData`);
});

// Обработчик POST запроса для приема JSON данных
app.post('/receiveData', (req, res) => {
  const data = req.body;
  
  // Сохранение полученных данных в массиве (замените на сохранение в базу данных в реальном приложении)
  receivedData.push(data);
  console.log('Received data:', data);
  
  res.send('HiC');
});

// Обработчик GET запроса для получения всех сохраненных данных
app.get('/getData', (req, res) => {
  res.json(receivedData);
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
