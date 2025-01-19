'use client';

import { Note } from '@/@types/note';
import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react';

interface NoteState {
  note?: Note;
  setNote: (note: Note) => void;
  resetNote: () => void;
}

export const WeatherContext = createContext<NoteState | undefined>(undefined);

export function useNoteContext() {
  const context = useContext(WeatherContext);

  if (!context) throw new Error('Must be inside a provider');

  return context;
}

export function NoteContextProvider({ children }: PropsWithChildren) {
  const [note, setNote] = useState<Note | undefined>();

  const contextValue = useMemo<NoteState>(
    () => ({
      note,
      setNote: (newNote) => setNote(newNote),
      resetNote: () => setNote(undefined)
    }),
    [note]
  );

  return <WeatherContext.Provider value={contextValue}>{children}</WeatherContext.Provider>;
}
