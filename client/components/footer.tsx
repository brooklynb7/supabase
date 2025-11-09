import { ThemeSwitcher } from '@/components/theme-switcher';

export function Footer() {
  return (
    <footer className="w-full flex items-center justify-end border-t mx-auto text-xs gap-2 py-4 pr-5">
      <p>
        Powered by{' '}
        <a href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs" target="_blank" className="font-bold hover:underline" rel="noreferrer">
          Supabase
        </a>
      </p>
      <ThemeSwitcher />
    </footer>
  );
}
