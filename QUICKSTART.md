# Quick Start Guide 🚀

## Start Development Server

```bash
npm run dev
```

The app will start on `http://localhost:3000` (or 3001 if 3000 is in use).

## Pages to Visit

### Public Pages
- **Landing Page**: `http://localhost:3000/`
  - Marketing homepage with features, pricing, FAQ

### Dashboard (Main App)
- **Dashboard**: `http://localhost:3000/dashboard`
  - Stats overview, activity feed, quick actions
  
- **Projects**: `http://localhost:3000/projects`
  - Project list with filters
  - Click "Nieuw Project" to create
  
- **Project Detail**: `http://localhost:3000/projects/1`
  - Full project view with tabs
  - Timeline, files, comments
  
- **Clients**: `http://localhost:3000/clients`
  - Client management
  - Invite link generator
  
- **Settings**: `http://localhost:3000/settings`
  - Branding customization
  - Email templates
  - Portal URL settings

### Client Portal (White-label View)
- **Portal View**: `http://localhost:3000/portal/1`
  - Clean client-facing interface
  - No sidebar, branded with mock company
  - Project progress and files
  - Try portal/2 for different project

## Test Data

The app comes with mock data:

### Clients
1. Jan de Vries - De Vries Holding
2. Sophie Bakker - Bakker Media
3. Mohammed Ali - Ali Consultancy

### Projects
1. Website Redesign (In uitvoering) - 65% complete
2. Brand Identity Pakket (Review) - 90% complete, needs approval
3. Social Media Campagne (Offerte) - 10% complete

## Features to Try

### Dashboard
✓ View active projects count
✓ Check pending approvals
✓ Browse recent activity feed
✓ Use quick actions

### Projects
✓ Filter by status
✓ Search projects
✓ Click "Nieuw Project" button
✓ View project details
✓ Drag milestones (UI only)
✓ View files section
✓ Add comments

### Client Portal
✓ View branded interface
✓ See progress bar
✓ Check milestones with checkmarks
✓ Download files (mock)
✓ Add comments
✓ Approve deliverables (project 2)

### Clients
✓ Add new client
✓ Generate invite links
✓ View client projects

### Settings
✓ Change company name
✓ Pick primary color (see live preview)
✓ Edit email templates
✓ View custom domain setup

## Build for Production

```bash
npm run build
```

Then start production server:

```bash
npm start
```

## Mobile Testing

The app is fully responsive! Test on:
- Mobile: 375px width
- Tablet: 768px width
- Desktop: 1024px+ width

Key mobile features:
- Hamburger menu
- Stacked cards
- Touch-friendly buttons
- Responsive tables

## Tech Stack Quick Reference

- **Next.js 14**: App Router with TypeScript
- **Tailwind CSS**: Utility-first styling
- **shadcn/ui**: Pre-built components
- **Lucide React**: Icon library

## Common Commands

```bash
# Development
npm run dev

# Build
npm run build

# Start production
npm start

# Run linter
npm run lint

# Type check
npx tsc --noEmit
```

## Troubleshooting

**Port already in use?**
- Next.js will automatically use the next available port (3001, 3002, etc.)

**Build errors?**
- Make sure all dependencies are installed: `npm install`
- Clear `.next` folder: `rm -rf .next && npm run dev`

**TypeScript errors?**
- Check `tsconfig.json` is present
- Run `npx tsc --noEmit` to see all errors

## Next Steps

This MVP includes:
✅ Complete UI/UX
✅ Mock data
✅ Responsive design
✅ Dutch localization

To make it production-ready, add:
- Database (Supabase/PostgreSQL)
- Authentication (NextAuth.js)
- File storage (S3/Cloudinary)
- Email service (Resend)
- Payment processing (Stripe)
- Real-time updates (Pusher/Socket.io)

Happy coding! 🎉
