# Supabase + Next.js Starter Kit

A full-stack application starter kit built with [Next.js](https://nextjs.org) and [Supabase](https://supabase.com), featuring authentication, user profiles, and employee management.

## 🚀 Features

- **Authentication System**

  - User sign up and login
  - Password reset and update
  - Email confirmation
  - Protected routes with middleware
  - Session management with cookies

- **User Profiles**

  - User profile management (name, phone)
  - Automatic profile creation on signup
  - Row Level Security (RLS) policies

- **Employee Management**

  - View employees list
  - Employee data with name, email, and department

- **Modern UI/UX**

  - [Tailwind CSS](https://tailwindcss.com) for styling
  - [shadcn/ui](https://ui.shadcn.com/) components
  - Dark/light theme switching
  - Responsive design

- **Developer Experience**
  - TypeScript for type safety
  - Next.js App Router
  - Supabase SSR integration
  - Local development with Supabase CLI

## 📁 Project Structure

```
supabase/
├── client/                    # Next.js application
│   ├── app/                   # App Router pages
│   │   ├── auth/             # Authentication pages
│   │   ├── employees/        # Employees page
│   │   ├── profile/          # User profile page
│   │   └── ...
│   ├── components/           # React components
│   │   ├── ui/              # shadcn/ui components
│   │   └── ...
│   └── lib/                  # Utilities and Supabase clients
│       └── supabase/         # Supabase client configurations
├── supabase/                 # Supabase configuration
│   ├── migrations/          # Database migrations
│   ├── config.toml          # Supabase local config
│   └── seed.sql             # Database seed data
└── package.json             # Root package.json with Supabase scripts
```

## 🗄️ Database Schema

### Tables

**employees**

- `id` (bigint, primary key, auto-generated)
- `name` (text)
- `email` (text)
- `department` (text, default: 'Hooli')
- `created_at` (timestamptz)

**profiles**

- `id` (uuid, primary key, references auth.users)
- `name` (text)
- `phone` (text)
- `updated_at` (timestamptz)

### Security

- Row Level Security (RLS) enabled on `profiles` table
- Users can only view, insert, and update their own profile
- Automatic profile creation via database trigger on user signup

## 🛠️ Tech Stack

- **Frontend**

  - [Next.js](https://nextjs.org) 15+ (App Router)
  - [React](https://react.dev) 19
  - [TypeScript](https://www.typescriptlang.org)
  - [Tailwind CSS](https://tailwindcss.com)
  - [shadcn/ui](https://ui.shadcn.com/)

- **Backend**

  - [Supabase](https://supabase.com) (Auth, Database)
  - PostgreSQL (via Supabase)

- **Development Tools**
  - Supabase CLI
  - ESLint
  - Turbopack (Next.js)

## 📋 Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- [Supabase CLI](https://supabase.com/docs/guides/cli) (for local development)
- Docker (required for local Supabase instance)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd supabase
```

### 2. Install Dependencies

Install root dependencies (Supabase CLI):

```bash
npm install
```

Install client dependencies:

```bash
cd client
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the `client` directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

> **Note**: For local development, you can use the local Supabase instance URLs after starting it (see step 4).

### 4. Start Local Supabase Instance

From the root directory:

```bash
npm run supabase:start
```

This will start:

- PostgreSQL database (port 54322)
- Supabase Studio (port 54323)
- API server (port 54321)
- Inbucket email testing (port 54324)

After starting, you'll see connection details. Use these for your `.env.local` file.

### 5. Run Database Migrations

Migrations are automatically applied when you start Supabase. To manually reset:

```bash
npm run supabase:reset
```

### 6. Start the Next.js Development Server

From the `client` directory:

```bash
cd client
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## 📝 Available Scripts

### Root Directory

- `npm run supabase:start` - Start local Supabase instance
- `npm run supabase:stop` - Stop local Supabase instance
- `npm run supabase:status` - Check Supabase status
- `npm run supabase:reset` - Reset database (applies migrations and seeds)

### Client Directory

- `npm run dev` - Start Next.js development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔐 Authentication

The app includes a complete authentication system:

- **Sign Up**: `/auth/sign-up`
- **Login**: `/auth/login`
- **Forgot Password**: `/auth/forgot-password`
- **Update Password**: `/auth/update-password`
- **Email Confirmation**: Handled via `/auth/confirm`

User sessions are managed using cookies via `@supabase/ssr`, making authentication work seamlessly across:

- Server Components
- Client Components
- Route Handlers
- Middleware

## 🎨 Customization

### Styling

The project uses Tailwind CSS with shadcn/ui components. To customize:

1. Edit `client/tailwind.config.ts` for theme customization
2. Modify `client/app/globals.css` for global styles
3. Use shadcn/ui CLI to add more components: `npx shadcn@latest add [component]`

### Database

To add new migrations:

```bash
cd supabase
supabase migration new your_migration_name
```

Edit the generated SQL file in `supabase/migrations/`, then apply:

```bash
npm run supabase:reset
```

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Connect your Supabase project
4. Environment variables will be automatically configured
5. Deploy!

### Deploy Supabase

1. Create a project on [Supabase Cloud](https://supabase.com/dashboard)
2. Link your local project:
   ```bash
   supabase link --project-ref your-project-ref
   ```
3. Push migrations:
   ```bash
   supabase db push
   ```

## 📚 Key Files

- `client/lib/supabase/server.ts` - Server-side Supabase client
- `client/lib/supabase/client.ts` - Client-side Supabase client
- `client/lib/supabase/middleware.ts` - Auth middleware
- `supabase/migrations/` - Database schema migrations
- `supabase/seed.sql` - Seed data for development

## 🔒 Security

- Row Level Security (RLS) enabled on sensitive tables
- Environment variables for sensitive keys
- Secure password requirements
- CSRF protection via Supabase
- Session management with secure cookies

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Auth Guide](https://supabase.com/docs/guides/auth)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and Supabase
