# ZZP KlantPortaal 🚀

Een moderne, professionele client portal SaaS applicatie speciaal gebouwd voor ZZP'ers (zelfstandigen zonder personeel) in Nederland.

## 📋 Product Concept

KlantPortaal is een eenvoudige maar krachtige tool waarmee ZZP'ers projectupdates, bestanden en facturen kunnen delen met hun klanten. Klanten krijgen toegang tot een gebrand portaal waar ze voortgang kunnen volgen, bestanden kunnen downloaden en deliverables kunnen goedkeuren.

## ✨ Features

### 1. **Landing Page** (Dutch)
- Aantrekkelijke hero sectie
- Feature showcase
- Prijzen (Gratis & Pro tier)
- Waitlist email capture
- FAQ sectie
- Testimonials
- Volledige footer

### 2. **Dashboard** (`/dashboard`)
- Actieve projecten overzicht
- Pending approvals counter
- Recent activity feed
- Quick actions: Nieuw project, Klant uitnodigen

### 3. **Projecten Beheer** (`/projects`)
- Project lijst met filters
- Create project dialog (naam, client, beschrijving, status, deadline)
- Project detail pagina met:
  - Timeline met drag-to-reorder mijlpalen
  - File upload sectie (mock)
  - Comments/updates feed
  - Status flow: Offerte → In uitvoering → Review → Afgerond
  - Progress tracking

### 4. **Client Portal View** (`/portal/[projectId]`)
- Clean, gebrand design (geen sidebar)
- Project status met progress bar
- Mijlpalen met checkmarks
- Shared files lijst met download
- Comments sectie
- "Goedkeuren" button voor deliverables

### 5. **Klanten Beheer** (`/clients`)
- Add client (naam, bedrijf, email)
- Client lijst met actieve projecten
- Invite link generator (mock)
- Per client project overzicht

### 6. **Instellingen** (`/settings`)
- Company branding (naam, logo placeholder, primary color)
- Email templates editor (mock)
- Portal URL customization (mock)
- Real-time preview

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Language**: TypeScript
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd zzp-klantportaal
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
zzp-klantportaal/
├── app/
│   ├── page.tsx              # Landing page
│   ├── dashboard/
│   │   └── page.tsx          # Dashboard
│   ├── projects/
│   │   ├── page.tsx          # Projects list
│   │   └── [id]/
│   │       └── page.tsx      # Project detail
│   ├── portal/
│   │   └── [projectId]/
│   │       └── page.tsx      # Client portal view
│   ├── clients/
│   │   └── page.tsx          # Clients management
│   ├── settings/
│   │   └── page.tsx          # Settings
│   └── layout.tsx
├── components/
│   ├── ui/                   # shadcn/ui components
│   └── dashboard-layout.tsx  # Shared dashboard layout
├── lib/
│   ├── mock-data.ts          # Mock data & types
│   └── utils.ts              # Utility functions
└── README.md
```

## 🎨 Features Highlights

### Mock Data
Het project gebruikt uitgebreide mock data voor demonstratie doeleinden:
- 3 klanten met verschillende bedrijven
- 3 projecten in verschillende statussen
- Mijlpalen, bestanden, en comments per project
- Activity feed met verschillende event types

### Responsive Design
- Mobile-first approach
- Hamburger menu voor mobile
- Optimized cards en layouts voor alle schermformaten

### Dutch UI
Alle user interface teksten zijn in het Nederlands, inclusief:
- Navigatie labels
- Form fields
- Error messages
- Notifications
- Date formatting (nl-NL)

### Branding Systeem
- Aanpasbare primaire kleur
- Logo upload placeholder
- Real-time preview van branding changes
- White-label client portal (geen KlantPortaal branding zichtbaar voor klanten)

## 🎯 Key Pages

| Route | Description |
|-------|-------------|
| `/` | Marketing landing page |
| `/dashboard` | Main dashboard overzicht |
| `/projects` | Projecten lijst & create |
| `/projects/[id]` | Project detail met tabs |
| `/portal/[projectId]` | Client-facing portal |
| `/clients` | Klanten management |
| `/settings` | Branding & configuratie |

## 🔄 Project Status Flow

```
Offerte → In uitvoering → Review → Afgerond
```

Elk project heeft een duidelijke status met visuele badges en progress tracking.

## 📝 Development Notes

### Mock Functionality
De volgende features zijn momenteel mocks (geen backend):
- File uploads (UI only)
- Email sending
- Authentication
- Invite link generation
- Payment processing
- Database persistence

### Future Enhancements
- Supabase/PostgreSQL database integratie
- NextAuth.js authenticatie
- File upload naar cloud storage
- Email notifications via Resend
- Stripe payment integratie
- Real-time updates met websockets

## 🎨 Design System

### Colors
- Primary: Blue (`#3b82f6`)
- Aanpasbaar via settings
- Status colors:
  - Offerte: Gray
  - In uitvoering: Blue
  - Review: Orange
  - Afgerond: Green

### Typography
- Font: Inter (via Google Fonts)
- Clear hierarchy met Tailwind typography classes

## 📱 Mobile Responsiveness

Alle pages zijn volledig responsive:
- Hamburger menu op mobile
- Stacked layouts
- Touch-friendly buttons
- Optimized spacing

## 🐛 Known Issues

Geen bekende issues. Project compileert en runt zonder errors.

## 📄 License

MIT License - Vrij te gebruiken voor commerciële projecten.

## 👥 Contributing

Contributions welkom! Open een issue of pull request.

## 📧 Contact

Voor vragen of support, neem contact op via het platform.

---

**Built with ❤️ for Dutch ZZP'ers**
