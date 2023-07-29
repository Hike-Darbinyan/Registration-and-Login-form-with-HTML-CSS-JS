const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('Public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname , '/login.html'));
});

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  const data = `\nUsername: ${username}\nEmail: ${email}\nPassword: ${password}\n`;

  fs.appendFile('info.txt', data, (err) => {
    if(err) throw err;
    console.log('User registered and data appended to info.txt')
  });

  res.send('Registration successsful!');
});

const port = 3000;
app.listen(process.env.PORT || port);
