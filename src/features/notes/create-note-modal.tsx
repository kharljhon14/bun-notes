'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import NotesForm from './notes-form';
import { useEffect, useState } from 'react';
import { useNoteContext } from '@/context/noteWeather';

export default function CreateNoteModal() {
  const { note, resetNote } = useNoteContext();

  const [open, setOpen] = useState(false);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) resetNote();
  };

  useEffect(() => {
    if (note) setOpen(true);
  }, [note]);

  return (
    <div className="fixed bottom-10 right-24">
      <Dialog
        open={open}
        onOpenChange={handleOpenChange}
      >
        <DialogTrigger
          onClick={() => setOpen(true)}
          asChild
          className="rounded-full size-20 bg-black text-white flex items-center justify-center cursor-pointer"
        >
          <Plus
            strokeWidth={1}
            size={36}
          />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Note</DialogTitle>
          </DialogHeader>
          <div>
            <NotesForm setOpen={setOpen} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
