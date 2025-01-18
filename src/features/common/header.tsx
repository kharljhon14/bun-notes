import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 shadow-md">
      <div>
        <Link
          href="/"
          className="text-lg font-semibold"
        >
          Bun Notes
        </Link>
      </div>
    </header>
  );
}
