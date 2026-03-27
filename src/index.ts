import dotenv from 'dotenv';
import { createApp } from './server';

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = createApp();

const server = app.listen(PORT, () => {
  console.log(`✅ Polymarket API Server running on http://localhost:${PORT}`);
  console.log(`📍 Endpoints:`);
  console.log(`   GET  /health`);
  console.log(`   GET  /api`);
  console.log(`   GET  /api/polymarket/health`);
  console.log(`   GET  /api/polymarket/markets`);
  console.log(`   GET  /api/polymarket/market/:id`);
  console.log(`   POST /api/polymarket/sync`);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
