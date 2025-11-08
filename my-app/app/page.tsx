import { createClient } from '@/lib/supabase/server';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function Home() {
  const supabase = await createClient();

  // Get current user
  const { data: { user } } = await supabase.auth.getUser();

  // Fetch user profile to get name
  let displayName = 'Guest';
  if (user) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('name')
      .eq('id', user.id)
      .single();

    displayName = profile?.name || user.email || 'User';
  }

  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center gap-8 min-h-[60vh]">
      <h1 className="text-4xl font-bold">
        Hello {displayName}
      </h1>
      <div className="flex gap-4">
        <Button asChild size="lg">
          <Link href="/profile">Profile</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/deploy">Deploy</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/auth/update-password">Update Password</Link>
        </Button>
      </div>
    </div>
  );
}
