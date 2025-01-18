'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { noteSchema, NoteSchemaType } from '@/schemas/note';
import { zodResolver } from '@hookform/resolvers/zod';

import { SubmitHandler, useForm } from 'react-hook-form';

export default function NotesForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<NoteSchemaType>({ resolver: zodResolver(noteSchema) });

  const onSubmit: SubmitHandler<NoteSchemaType> = (values) => {
    console.log(values);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-4"
    >
      <div>
        <Label>Title</Label>
        <Input {...register('title')} />
        {errors.title?.message && (
          <Label className="text-red-500 text-xs">{errors.title?.message}</Label>
        )}
      </div>

      <div>
        <Label>Description</Label>
        <Textarea
          rows={12}
          {...register('description')}
        />
        {errors.description?.message && (
          <Label className="text-red-500 text-xs">{errors.description?.message}</Label>
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
