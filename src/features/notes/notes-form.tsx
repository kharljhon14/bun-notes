'use client';

import { Note } from '@/@types/note';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useNoteContext } from '@/context/noteWeather';
import { noteSchema, NoteSchemaType } from '@/schemas/note';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { SubmitHandler, useForm } from 'react-hook-form';

interface Props {
  setOpen: (value: boolean) => void;
}

export default function NotesForm({ setOpen }: Props) {
  const { note, resetNote } = useNoteContext();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newNote: Omit<Note, 'id'>) => {
      if (note) {
        const respone = await fetch(`http://localhost:5001/api/v1/notes/${note.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newNote)
        });
        return await respone.json();
      } else {
        const respone = await fetch('http://localhost:5001/api/v1/notes', {
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
          body: JSON.stringify(newNote)
        });
        return await respone.json();
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
      resetNote();
      setOpen(false);
    }
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<NoteSchemaType>({ resolver: zodResolver(noteSchema) });

  const onSubmit: SubmitHandler<NoteSchemaType> = (values) => {
    if (note?.title === values.title && note.description === note.description) {
      resetNote();
      setOpen(false);
    } else {
      mutation.mutate(values);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-4"
    >
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          {...register('title', { value: note?.title })}
        />
        {errors.title?.message && (
          <Label
            htmlFor="title"
            className="text-red-500 text-xs"
          >
            {errors.title?.message}
          </Label>
        )}
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          rows={12}
          {...register('description', { value: note?.description })}
        />
        {errors.description?.message && (
          <Label
            htmlFor="description"
            className="text-red-500 text-xs"
          >
            {errors.description?.message}
          </Label>
        )}
      </div>
      <Button
        size="lg"
        className="uppercase"
      >
        Submit
      </Button>
    </form>
  );
}
