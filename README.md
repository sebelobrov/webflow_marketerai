## Webflow Cloud + DevLink (Next.js App)

This repo is prepared for developing a Next.js app that integrates with Webflow Cloud and DevLink.

References:
- Webflow Cloud: https://webflow.com/cloud
- Webflow DevLink: https://webflow.com/devlink

### Prerequisites
- Node.js >= 20
- GitHub repo (for Cloud deploys)
- Access to Webflow Cloud (beta) and DevLink in your Webflow workspace

### Local development
```bash
npm install
npm run dev
# http://localhost:3000
```

### Connect to Webflow Cloud
1. Push this repo to GitHub.
2. In Webflow Cloud UI, create an app (Next.js), connect GitHub repo, select build and environment settings.
3. Configure environment variables as needed in Cloud (same keys as your local .env).

### DevLink usage (high level)
1. In Webflow Designer, mark components for DevLink.
2. Follow DevLink docs to link your Webflow project and sync components into this app.
3. Import and use synced React components in your pages.

### Scripts
```bash
npm run dev     # Local dev
npm run build   # Production build
npm start       # Start production server locally
```

### Notes
- Code Export != Cloud. Cloud hosts your app with GitHub deployments and can sync UI via DevLink.
- CMS data and other dynamic features are accessed via APIs/SDKs, not via static export.
