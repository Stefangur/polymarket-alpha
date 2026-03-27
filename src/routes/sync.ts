import { Router } from 'express';
import { PolymarketClient } from '../lib/polymarket';

const router = Router();
const client = new PolymarketClient();

let syncInProgress = false;
let lastSyncTime: string | null = null;

/**
 * POST /api/polymarket/sync
 * Trigger a sync of all markets from Polymarket
 */
router.post('/', async (req, res) => {
  try {
    if (syncInProgress) {
      return res.status(409).json({
        success: false,
        error: 'Sync already in progress',
        lastSync: lastSyncTime
      });
    }

    syncInProgress = true;
    
    await client.syncMarkets();
    lastSyncTime = new Date().toISOString();
    syncInProgress = false;

    res.json({
      success: true,
      message: 'Sync completed',
      syncTime: lastSyncTime
    });
  } catch (error) {
    syncInProgress = false;
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

/**
 * GET /api/polymarket/sync
 * Get last sync status
 */
router.get('/', (req, res) => {
  res.json({
    success: true,
    syncInProgress,
    lastSync: lastSyncTime,
    timestamp: new Date().toISOString()
  });
});

export default router;
