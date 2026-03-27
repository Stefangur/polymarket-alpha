import { Router } from 'express';

const router = Router();

/**
 * GET /api/polymarket/health
 * Returns health status of the API
 */
router.get('/', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: '0.1.0'
  });
});

export default router;
