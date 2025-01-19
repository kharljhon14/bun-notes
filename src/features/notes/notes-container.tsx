'use client';

import { useQuery } from '@tanstack/react-query';
import NoteCard from './note-card';
import { Note } from '@/@types/note';

export default function NotesContainer() {
  const { isPending, error, data } = useQuery<Note[]>({
    queryKey: ['notes'],
    queryFn: async () => {
      const response = await fetch('http://localhost:5001/api/v1/notes');

      return await response.json();
    }
  });

  if (isPending) return 'Loading....';

  if (error) return 'An error has occured' + error.message;

  return (
    <div className="grid auto-rows-auto auto-col-auto md:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
        />
      ))}
    </div>
  );
}
