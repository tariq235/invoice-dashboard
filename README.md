# Invoice Dashboard

A modern, responsive invoice management dashboard built with Next.js 15, React 19, and Tailwind CSS. The application demonstrates best practices in frontend architecture, using component-based design, dynamic data loading from JSON, and a clean separation of concerns.

## Features
- **Login System:** Demo users authenticate via data in `public/data/users.json`.
- **Dashboard:** Key metrics, overdue invoices, quick actions, and recent invoices, all powered by JSON data (`public/data/invoices.json`).
- **No Hardcoded Data:** All dashboard data is loaded from JSON files for easy updates and future backend integration.
- **Modern UI:** Built with Tailwind CSS, Radix UI, and Lucide React icons.
- **Component-Based:** Each dashboard section is its own React component for maintainability.

## Project Architecture

```
/ (root)
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Dashboard page (protected)
│   ├── login/
│   │   └── page.tsx         # Login screen
│   ├── logout/
│   │   └── page.tsx         # Logout logic
│   ├── error.tsx            # Error boundary
│   └── global-error.tsx     # Global error boundary
├── components/
│   ├── dashboard-header.tsx
│   ├── dashboard-nav.tsx
│   ├── key-metrics.tsx      # Metrics cards (dynamic)
│   ├── overdue-invoices.tsx # Overdue section (dynamic)
│   ├── quick-actions.tsx
│   └── recent-invoices.tsx  # Recent table (dynamic)
├── public/
│   └── data/
│       ├── users.json       # Demo user data
│       └── invoices.json    # Demo invoice data
├── styles/
│   └── globals.css
└── project-overview.html    # Visual project/architecture overview
```

## Data Flow
- On login, user credentials are checked against `users.json`.
- Dashboard metrics, tables, and lists are dynamically calculated from `invoices.json`.
- No hardcoded invoice/user data in any component.

## Getting Started
1. Clone the repo and install dependencies:
   ```bash
   git clone git@github.com:tariq235/invoice-dashboard.git
   cd invoice-dashboard
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Visit [http://localhost:3000/login](http://localhost:3000/login) and log in with a demo user (see `public/data/users.json`).

## Customization
- To add users/invoices, edit the respective JSON files in `public/data/`.
- To connect to a backend, replace fetches to JSON with API calls.

## License
MIT
