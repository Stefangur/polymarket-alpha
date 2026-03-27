import { Router } from 'express';
import { PolymarketClient } from '../lib/polymarket';

const router = Router();
const client = new PolymarketClient();

/**
 * GET /api/polymarket/markets
 * Returns list of all markets
 */
router.get('/', async (req, res) => {
  try {
    const markets = await client.getMarkets();
    res.json({
      success: true,
      data: markets,
      count: markets.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;
