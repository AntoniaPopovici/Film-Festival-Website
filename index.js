const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/form.html', (req, res) => {
  const formData = req.body;
  // Do something with the form data here
  alert("Hello! I am an alert box!!");
  res.send('Form submitted successfully!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});