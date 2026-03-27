# Polymarket Alpha

Express.js API server exposing Polymarket library functionality.

## Setup

```bash
npm install
npm run build
npm start
```

## API Endpoints

- `GET /health` - Basic health check
- `GET /api` - API info
- `GET /api/polymarket/health` - Polymarket API health
- `GET /api/polymarket/markets` - Get all markets
- `GET /api/polymarket/market/:id` - Get market by ID
- `GET /api/polymarket/sync` - Get sync status
- `POST /api/polymarket/sync` - Trigger market sync

## Development

```bash
npm run dev
```

Uses `ts-node` for direct TypeScript execution.

## Environment

Create `.env` file:

```
PORT=3000
POLYMARKET_API_KEY=your_key_here
```
