'use client';

import { NoteContextProvider } from '@/context/noteWeather';
import { PropsWithChildren } from 'react';

export default function NotesProvider({ children }: PropsWithChildren) {
  return <NoteContextProvider>{children}</NoteContextProvider>;
}
