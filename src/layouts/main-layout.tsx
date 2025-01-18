import Header from '@/features/common/header';
import CreateNoteModal from '@/features/notes/create-note-modal';
import { PropsWithChildren } from 'react';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="container mx-auto my-10 relative">
        {children}
        <CreateNoteModal />
      </main>
    </>
  );
}
