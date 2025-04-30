import { createServer } from 'http';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create a simple HTTP server to serve static files
const server = createServer((req, res) => {
  console.log(`Received request for ${req.url}`);
  
  let filePath;
  if (req.url === '/' || req.url === '/index.html') {
    filePath = resolve(__dirname, 'client/index.html');
  } else {
    // Remove the leading slash and serve from the client directory
    filePath = resolve(__dirname, 'client', req.url.substring(1));
  }

  try {
    const content = readFileSync(filePath);
    
    // Set content type based on file extension
    const ext = filePath.split('.').pop().toLowerCase();
    let contentType = 'text/html';
    
    switch (ext) {
      case 'js':
        contentType = 'text/javascript';
        break;
      case 'css':
        contentType = 'text/css';
        break;
      case 'json':
        contentType = 'application/json';
        break;
      case 'png':
        contentType = 'image/png';
        break;
      case 'jpg':
        contentType = 'image/jpg';
        break;
      case 'svg':
        contentType = 'image/svg+xml';
        break;
    }
    
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  } catch (error) {
    // If the file is not found, redirect to index.html for client-side routing
    try {
      const indexContent = readFileSync(resolve(__dirname, 'client/index.html'));
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(indexContent);
    } catch (err) {
      res.writeHead(500);
      res.end('Internal Server Error');
      console.error(err);
    }
  }
});

// Listen on port 5000
const PORT = 5000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Client-only server running at http://0.0.0.0:${PORT}/`);
});