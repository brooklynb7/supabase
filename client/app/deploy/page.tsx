import { DeployButton } from '@/components/deploy-button';

export default function DeployPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
      <h1 className="text-3xl font-bold">Deploy</h1>
      <p className="text-muted-foreground text-center max-w-md">
        Deploy your Next.js application to Vercel with one click
      </p>
      <DeployButton />
    </div>
  );
}

