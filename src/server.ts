import express, { Express } from 'express';
import cors from 'cors';

import healthRouter from './routes/health';
import marketsRouter from './routes/markets';
import marketRouter from './routes/market';
import syncRouter from './routes/sync';

export function createApp(): Express {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());

  // Routes
  app.use('/api/polymarket/health', healthRouter);
  app.use('/api/polymarket/markets', marketsRouter);
  app.use('/api/polymarket/market', marketRouter);
  app.use('/api/polymarket/sync', syncRouter);

  // Root endpoint
  app.get('/api', (req, res) => {
    res.json({
      message: 'Polymarket API Server',
      version: '0.1.0',
      status: 'running'
    });
  });

  // Health check at root
  app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  return app;
}
