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
import { useState } from 'react';

export default function CreateNoteModal() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-10 right-24">
      <Dialog
        open={open}
        onOpenChange={setOpen}
      >
        <DialogTrigger
          onClick={() => setOpen(true)}
          asChild
          className="rounded-full size-20 bg-black text-white flex items-center justify-center"
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
