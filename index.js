import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`Hello, World! this is port ${PORT} Mohammad Atif Hossain Hello world`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})