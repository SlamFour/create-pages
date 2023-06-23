const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
  origin: "http://127.0.0.1:5501/"
}));

app.listen(port, () => {
    console.log(`Console listening at ${port}`);
});

app.post('/pages', (req, res) => {
    const { data } = req.body;
  
    // Generate the HTML content dynamically based on the received data
    const htmlContent = `<html><body><h1>${data}</h1></body></html>`;
  
    // Send the HTML content as the response
    res.send(htmlContent);
  });