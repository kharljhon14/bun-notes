import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 shadow-md">
      <div>
        <Link href="/">Bun Notes</Link>
      </div>
      <div>
        <Button>Sign In</Button>
      </div>
    </header>
  );
}
