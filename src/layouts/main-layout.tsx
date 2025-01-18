import { PropsWithChildren } from 'react';

export default function MainLayout({ children }: PropsWithChildren) {
  return <main className="container mx-auto my-10">{children}</main>;
}
