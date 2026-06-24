const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 3000;

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

const INJECT = `
<script>
(function(){
  var es = new EventSource('/__reload');
  es.onmessage = function(){ location.reload(); };
})();
</script>`;

const ROOT = __dirname;
let clients = [];

// Watch for file changes
fs.watch(ROOT, { recursive: true }, (event, filename) => {
  if (filename && !filename.includes('node_modules')) {
    console.log(`[change] ${filename}`);
    clients.forEach(res => res.write('data: reload\n\n'));
    clients = [];
  }
});

const server = http.createServer((req, res) => {
  // SSE endpoint for live reload
  if (req.url === '/__reload') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    });
    res.write('\n');
    clients.push(res);
    req.on('close', () => { clients = clients.filter(c => c !== res); });
    return;
  }

  let filePath = path.join(ROOT, req.url === '/' ? 'index.html' : req.url);

  // Prevent directory traversal
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      return res.end('Not found');
    }

    const ext = path.extname(filePath).toLowerCase();
    const mime = mimeTypes[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': mime });

    if (ext === '.html') {
      data = Buffer.from(data.toString().replace('</body>', INJECT + '</body>'));
    }

    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Dev server running at http://localhost:${PORT}`);
});
