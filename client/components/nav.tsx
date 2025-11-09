import { EnvVarWarning } from '@/components/env-var-warning';
import { AuthButton } from '@/components/auth-button';
import { hasEnvVars } from '@/lib/utils';
import Link from 'next/link';

export function Nav() {
  return (
    <nav className="w-full flex justify-between items-center border-b border-b-foreground/10 h-16 p-3 px-5 text-sm">
      <div className="flex gap-5 items-center font-semibold">
        <Link href={'/'}>my app</Link>
      </div>
      {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
    </nav>
  );
}
