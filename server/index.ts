import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the dist/client directory
app.use(express.static(path.join(__dirname, '../client'), { maxAge: '1y', immutable: true }));

// API routes go here
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Send all requests to index.html for client-side routing
app.get('*', (req, res) => {
  // Don't serve index.html for API routes or static files
  if (req.url.startsWith('/api/') || req.url.startsWith('/assets/')) {
    return res.status(404).send('Not found');
  }
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});