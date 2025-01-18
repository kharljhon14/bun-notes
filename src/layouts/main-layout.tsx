import Header from '@/features/common/header';
import { PropsWithChildren } from 'react';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="container mx-auto my-10">{children}</main>
    </>
  );
}
