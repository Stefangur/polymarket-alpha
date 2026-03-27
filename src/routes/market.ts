import { Router } from 'express';
import { PolymarketClient } from '../lib/polymarket';

const router = Router();
const client = new PolymarketClient();

/**
 * GET /api/polymarket/market/:id
 * Returns a specific market by ID
 */
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!id) {
      return res.status(400).json({
        success: false,
        error: 'Market ID is required'
      });
    }

    const market = await client.getMarket(id);
    
    if (!market) {
      return res.status(404).json({
        success: false,
        error: 'Market not found'
      });
    }

    res.json({
      success: true,
      data: market
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;
