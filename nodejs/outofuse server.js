const http = require('http');
const fs = require('fs');
const cors = require('cors');

const { parse } = require('querystring');

const server = http.createServer((req, res) => {
  // Handle CORS using the cors middleware
  cors()(req, res, () => {
    if (req.method === 'POST' && req.url === '.../nodejs') {
      collectRequestData(req, (pageContent) => {
        savePage(pageContent, (err) => {
          if (err) {
            console.error('An error occurred while saving the page:', err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Failed to save the page');
          } else {
            console.log('Page saved successfully');
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Page saved successfully');
          }
        });
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});

function collectRequestData(request, callback) {
    let body = '';

    request.on('data', (chunk) => {
        body += chunk.toString();
    });

    request.on('end', () => {
        const pageContent = parse(body).content;
        callback(pageContent);
    })
}

function savePage(pageContent, callback) {
    const fileName = `page_${Date.now()}.html`;
    const filePath = `/pages/${fileName}`;

    fs.writeFile(filePath, pageContent, callback);
}