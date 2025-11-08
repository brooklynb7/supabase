"use client";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";

export function LogoutButton() {
  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    // Use window.location for a full page refresh to ensure server components
    // re-fetch authentication state
    window.location.href = "/auth/login";
  };

  return <Button onClick={logout}>Logout</Button>;
}
